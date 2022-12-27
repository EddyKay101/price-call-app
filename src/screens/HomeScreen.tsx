import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, FlatList } from 'react-native';
import Layout from '@components/Layout';
import Panel from '@components/Panel';
import { Price } from '@models/Price.model'
import { PRICE_CALL_GRAPHQL_URL } from '@env';
import { request, gql } from 'graphql-request'
import { Theme } from '@models/Theme.model';
import { useThemeAwareObject } from '@hooks/ThemeAwareObject.hook';
const query = gql`
  query {
    prices {
      prices {
        open
        close
        pair
      }
  }
  }
`
const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
    },
    item: {
      padding: 19,

    },
    itemText: {
      color: theme.color.misc,
      fontSize: 16
    }
  })
  return styles
}


const HomeScreen = () => {
  const Styles = useThemeAwareObject(createStyles);

  const createInlineStyles = (theme: Theme) => {
    const styles = StyleSheet.create({
      itemPanelEven: {
        backgroundColor: theme.color.primary,
      },
      itemPanelOdd: {
        backgroundColor: theme.color.tertiary
      },
      itemTextEven: {

      },
      itemTextOdd: {

      }
    })
    return styles
  }
  const InlineStyles = useThemeAwareObject(createInlineStyles);
  const [data, setData] = useState<Price>();


  useEffect(() => {
    const timer = setTimeout(() => {
      request(PRICE_CALL_GRAPHQL_URL, query)
        .then((data) => {
          setData(() => data.prices)
        })
    })

    return () => clearTimeout(timer)
  }, [])

  return (

    <Layout title='Home'>
      <Panel>
        <FlatList

          keyExtractor={(price) => price.pair}
          data={data?.prices}
          renderItem={({ item, index }) => {
            return (
              <SafeAreaView style={Styles.container}>
                <View style={[Styles.item, index === 0 && { marginTop: 25 }, index % 2 === 0 ? InlineStyles.itemPanelEven : InlineStyles.itemPanelOdd]}>
                  <Text style={[Styles.itemText, index % 2 === 0 ? InlineStyles.itemTextEven : InlineStyles.itemTextOdd]}>{item.pair}</Text>
                </View>

              </SafeAreaView>
            )
          }}
        />
      </Panel>
    </Layout>
  );
};



export default HomeScreen;
