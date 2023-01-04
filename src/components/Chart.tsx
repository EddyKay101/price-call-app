
import { ReactNode, useEffect, useState, memo, useMemo } from 'react';
import { VictoryChart, VictoryTheme, VictoryZoomContainer, VictoryAxis, VictoryCandlestick, VictoryArea } from 'victory-native';
import { View, ScrollView, StyleSheet, Text, Dimensions, TouchableOpacity, requireNativeComponent } from 'react-native';
import { Chart } from '@models/Chart.model';
import moment from 'moment';
import { Theme } from '@models/Theme.model';
import { useThemeAwareObject } from '@hooks/ThemeAwareObject.hook';
import ElementHolder from '@components/ElementHolder';
import DropDown from '@components/DropDown';
interface ChartProps {
  payload: Chart;
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
      top: 38.5,
      backgroundColor: theme.color.misc,
      width: 75,
      padding: 10,
      color: theme.color.tertiary
    },
  })
  return styles
}


const mapToVictoryChart = (arr: any) => {
  let newArr: any = [];
  arr.map((a: any) => {
    const dateInMilliseconds = a.date * 1000;
    a.x = new Date(dateInMilliseconds)
    delete a.date;
    newArr.push(a);
  })
  return newArr;
}
const mapToVictoryArea = (arr: any) => {
  let newArr: any = [];
  arr.map((a: any) => {
    const dateInMilliseconds = a.date * 1000;
    a.x = new Date(dateInMilliseconds)
    a.y = a.open
    a.y0 = a.close
    delete a.high
    delete a.low
    delete a.open
    delete a.close
    newArr.push(a);
  })
  return newArr;
}
const ChartCmp = memo<ChartProps>(({ payload }) => {
  const mappedData = mapToVictoryChart(payload);
  // const mappedArea = mapToVictoryArea(payload);
  const Styles = useThemeAwareObject(createStyles);
  const NativeStyles = useThemeAwareObject(nativeStyles);

  return (
    <ScrollView>
      <ElementHolder text={'EUR/USD'} style={NativeStyles.elementHolder}>
        <DropDown item={'candle'} list={['candle', 'line']} style={NativeStyles.dropdown} textStyle={NativeStyles.dropdownPanel} />
      </ElementHolder>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 25 }}
        scale={{ x: "time" }}
      >
        <VictoryAxis
          tickFormat={(t) => `${t.getDate()}`}
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
        <VictoryCandlestick
          candleColors={{ positive: "green", negative: "red" }}
          data={mappedData}
          candleWidth={2}
        />

      </VictoryChart>
    </ScrollView>

  )
})

export default ChartCmp