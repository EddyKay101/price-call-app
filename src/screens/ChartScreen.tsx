import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import { VictoryChart, VictoryTheme, VictoryAxis, VictoryCandlestick } from 'victory-native';
import { Alerts } from '@models/Alerts.model';
import { PRICE_CALL_GRAPHQL_URL } from '@env';
import { request, gql } from 'graphql-request'
import Layout from '@components/Layout';
const ChartScreen = () => {
  type GetAlertsResponse = {
    data: Alerts[];
  };

  // const getData = async () => {
  //   try {
  //     const { data } = await axios.get<GetAlertsResponse>(
  //       'https://price-call.co.uk/alerts',
  //       {
  //         headers: {
  //           Accept: 'application/json'
  //         }
  //       }
  //     );
  //     console.log(data);
  //     return data;
  //   } catch (err) {
  //     if (axios.isAxiosError(err)) {
  //       console.log(err.message);
  //       return err.message;
  //     } else {
  //       console.log('unexpected error: ', err);
  //       return err;
  //     }
  //   }
  // };



  useEffect(() => {

  });
  return (
    // <VictoryChart
    //   theme={VictoryTheme.material}
    //   scale={{ x: "time" }}
    // >
    //   <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`} />
    //   <VictoryAxis dependentAxis />
    //   <VictoryCandlestick
    //     candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
    //     data={[
    //       { x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0 },
    //       { x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5 },
    //       { x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10 },
    //       { x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7 },
    //       { x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5 }
    //     ]}
    //   />
    // </VictoryChart>
    <Layout title='Chart'>

    </Layout>

  );
};

const styles = StyleSheet.create({

})

export default ChartScreen;
