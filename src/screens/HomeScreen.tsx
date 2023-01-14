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
    panel: {
      height: '40%',
      maxHeight: '40%',
      top: 0
    },
    bottomPanel: {
      backgroundColor: theme.color.primary,
      height: '100%',
      maxHeight: '100%',
    },
    item: {
      padding: 19,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'

    },
    itemText: {
      color: theme.color.misc,
      fontSize: 18
    },
    itemForexText: {
      fontSize: 20
    },
    priceText: {
      color: theme.color.misc,
      fontSize: 10
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'row'
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


  function removeAfterPeriod(string: string) {
    const substrings = string.split(".");
    substrings.pop();
    return substrings.join(".") + ".";
  }

  function removeBeforePeriod(string: string) {
    const substrings = string.split(".");
    substrings.shift();
    return substrings.join(".");
  }

  function LastCharacterSuperscriptOpen({ string, item }: any) {
    const lastCharacter = string.charAt(string.length - 1);
    return (

      <Text style={{ fontSize: 20, fontWeight: 'bold', position: 'relative', color: item.open > item.close ? 'green' : 'red', }}>
        {string.substring(0, string.length - 1)}
        <Text style={{ fontSize: 12, position: 'absolute', bottom: 0 }}>
          {lastCharacter}
        </Text>
      </Text>
    );
  }
  function LastCharacterSuperscriptClose({ string, item }: any) {
    const lastCharacter = string.charAt(string.length - 1);
    return (

      <Text style={{ fontSize: 20, fontWeight: 'bold', position: 'relative', color: item.close > item.open ? 'green' : 'red' }}>
        {string.substring(0, string.length - 1)}
        <Text style={{ fontSize: 12, position: 'absolute', bottom: 0 }}>
          {lastCharacter}
        </Text>
      </Text>
    );
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      request(PRICE_CALL_GRAPHQL_URL, query)
        .then((data) => {
          setData(() => data.prices)
        })
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (

    <Layout title='Home'>
      <Panel style={Styles.panel}>
        <FlatList

          keyExtractor={(price) => price.pair}
          data={data?.prices}
          renderItem={({ item, index }) => {
            return (
              <SafeAreaView style={Styles.container}>
                <View style={[Styles.item, index === 0 && { marginTop: 3 }, index % 2 === 0 ? InlineStyles.itemPanelEven : InlineStyles.itemPanelOdd]}>
                  <Text style={[Styles.itemText, index % 2 === 0 ? InlineStyles.itemTextEven : InlineStyles.itemTextOdd]}>{item.pair.slice(0, 3) + '/' + item.pair.slice(item.pair.length - 3)}</Text>
                  <View>
                    <View>
                      <Text style={Styles.priceText}>Current</Text>

                      <View style={Styles.textContainer}>
                        <Text style={[Styles.itemForexText, { color: item.open > item.close ? 'green' : 'red', }]}>{removeAfterPeriod(item.open.toString())}</Text>

                        <LastCharacterSuperscriptOpen string={removeBeforePeriod(item.open.toString())} item={item} />
                      </View>
                    </View>
                  </View>
                  <View>
                    <Text style={Styles.priceText}>Previous</Text>
                    <View style={Styles.textContainer}>
                      <Text style={[Styles.itemForexText, { color: item.close > item.open ? 'green' : 'red' }]}>{removeAfterPeriod(item.close.toString())}</Text>

                      <LastCharacterSuperscriptClose string={removeBeforePeriod(item.close.toString())} item={item} />
                    </View>

                  </View>

                </View>

              </SafeAreaView>
            )
          }}
        />
      </Panel>
      <Panel style={Styles.bottomPanel}>

      </Panel>

    </Layout>
  );
};



export default HomeScreen;
