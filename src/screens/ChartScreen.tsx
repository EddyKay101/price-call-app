import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Chart } from '@models/Chart.model'
import { PRICE_CALL_GRAPHQL_URL } from '@env';
import { Theme } from '@models/Theme.model';
import { request, gql } from 'graphql-request';
import ChartCmp from '@components/Chart';
import ElementHolder from '@components/ElementHolder';
import Layout from '@components/Layout';
import { useThemeAwareObject } from '@hooks/ThemeAwareObject.hook';

const nativeStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    elementHolder: {
      height: '15%'
    }


  })
  return styles
}

const query = gql`
  query {
    chart(currency: "EURGBP", interval: "60m", period:"1d") {
      chart {
        date,
        open,
        close,
        high,
        low
      }
    }
  }
`
const ChartScreen = () => {


  const NativeStyles = useThemeAwareObject(nativeStyles);




  const [data, setData] = useState<Chart>();



  useEffect(() => {
    const timer = setTimeout(() => {
      request(PRICE_CALL_GRAPHQL_URL, query)
        .then((data) => {
          setData(() => data.chart)
        })
    }, 100)

    return () => clearTimeout(timer)
  })

  return (

    <Layout title='Chart'>

      {
        data && <ChartCmp payload={data} />
      }


      <ElementHolder style={NativeStyles.elementHolder}>

      </ElementHolder>
    </Layout>
  );
};


export default ChartScreen;

