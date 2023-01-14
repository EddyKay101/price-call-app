
import { ReactNode, useEffect, useState, useContext, memo, useMemo } from 'react';
import { VictoryChart, VictoryTheme, VictoryLine, VictoryAxis, VictoryCandlestick, VictoryArea } from 'victory-native';
import { View, ScrollView, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Chart } from '@models/Chart.model';
import moment from 'moment';
import { Theme } from '@models/Theme.model';
import { useThemeAwareObject } from '@hooks/ThemeAwareObject.hook';
import ElementHolder from '@components/ElementHolder';
import Tabs from '@components/Tabs';
import { useType } from '@contexts/ChartContext';


// React Native Charts
import { LineChart, XAxis, YAxis, AreaChart } from 'react-native-svg-charts'


interface ChartProps {
  payload: any;
}

const createStyles = (theme: Theme) => {
  const styles =
  {
    grid: {
      stroke: theme.color.misc,
    },
    axis: {
      stroke: theme.color.misc,
    },

    data: {
      stroke: theme.color.misc
    }

  }

  return styles
}
const nativeStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    elementHolder: {
      height: '15%'
    },
    dropdown: {
      borderRadius: 5,
      padding: 10,
      width: '20%',
      position: 'absolute',
      right: 0,
      top: 0,
      transform: [{ translateY: 10 }],
      marginRight: 10,
      backgroundColor: theme.color.secondary,
    },
    dropdownPanel: {
      borderRadius: 5,
      position: 'absolute',
      top: 60,
      height: 120,
      backgroundColor: theme.color.misc,
      width: Dimensions.get('window').width,
      padding: 10,
      color: theme.color.tertiary,
    },
    chartOptionContainer: {
      borderRadius: 5,
      padding: 10,
      width: '30%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      right: 0,
      top: 0,
      transform: [{ translateY: 10 }],
      marginRight: 10,
    },

  })
  return styles
}

let min: any;

let max: any;

const convertToVictoryCandle = (data: Chart) => {
  return data.chart.map(item => {
    max = Math.max(item.date)
    min = Math.min(item.date)
    return {
      x: new Date(item.date * 1000),
      open: item.open,
      close: item.close,
      high: item.high,
      low: item.low
    }
  });
};




const ChartCmp = memo<ChartProps>(({ payload }) => {

  const Styles = useThemeAwareObject(createStyles);
  const NativeStyles = useThemeAwareObject(nativeStyles);
  const convertToVictoryLine = (data: Chart) => {
    const chartData = data.chart && data.chart.map(item => ({ x: item.date, y: item.close }));
    return {
      data: chartData,
      x: 'x',
      y: 'y',
      style: Styles.data,

    };
  }

  function convertToVictoryArea(data: Chart) {
    return data.chart.map(item => {
      return { x: new Date(item.date * 1000), y: item.close };
    });
  }
  const victoryLineData = convertToVictoryLine(payload)
  const victoryCandle = convertToVictoryCandle(payload)
  const victoryArea = convertToVictoryArea(payload)
  const { chartType } = useType();
  let options = { day: '2-digit', month: '2-digit' };

  const chartOptions = {
    chart: {
      type: 'candlestick'
    },
    series: [{
      data: victoryCandle
    }]
  }

  return (

    <ScrollView>
      <ElementHolder text={'EUR/USD'} style={NativeStyles.elementHolder}>
        {/* <DropDown item={'candle'} list={['candle', 'line']} style={NativeStyles.dropdown} panelStyle={NativeStyles.dropdownPanel} onItemPress={pressed} /> */}

        <Tabs style={NativeStyles.chartOptionContainer} text={['candle', 'line']} />



      </ElementHolder>



      {
        chartType === 'candle' &&

        <VictoryChart
          theme={VictoryTheme.material}
          scale={{ x: "time" }}

        >

          <VictoryAxis dependentAxis
            style={
              {
                tickLabels: { padding: 16, fontSize: 8 },
                grid: Styles.grid,
                axis: Styles.axis,
                ticks: { size: 0 },
              }
            }
          />
          <VictoryAxis
            // tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`}
            fixLabelOverlap
            style={
              {
                tickLabels: { padding: 16, fontSize: 8 },
                grid: Styles.grid,
                axis: Styles.axis,
                ticks: { size: 0 },
              }
            }

          />



          <VictoryCandlestick
            candleColors={{ positive: "green", negative: "red" }}
            data={victoryCandle}
            candleWidth={2}

          />



        </VictoryChart>



      }

      {
        chartType === 'line' &&
        <VictoryChart theme={VictoryTheme.material} >
          <VictoryAxis dependentAxis
            style={
              {
                tickLabels: { padding: 16, fontSize: 8 },
                grid: Styles.grid,
                axis: Styles.axis,
                ticks: { size: 0 },
              }
            }
          />

          <VictoryAxis

            fixLabelOverlap
            // tickFormat={(t) => new Date(t * 1000).toLocaleDateString('default', { day: '2-digit', month: '2-digit' })}
            style={
              {
                tickLabels: { padding: 16, fontSize: 8 },
                grid: Styles.grid,
                axis: Styles.axis,
                ticks: { size: 0 },
              }
            }

          />



          <VictoryLine
            data={victoryLineData.data}
            x={victoryLineData.x}
            y={victoryLineData.y}
            style={victoryLineData.style}


          />

        </VictoryChart>


      }

    </ScrollView>

  )
})

export default ChartCmp