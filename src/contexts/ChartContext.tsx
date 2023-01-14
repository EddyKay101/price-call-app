import { ReactNode, useState, useCallback, useContext, memo, useMemo } from 'react';
import { createContext } from "react";

interface ProvidedValue {
  chartType: string;
  setType: (chartType: string) => void;
}

export const ChartContext = createContext<ProvidedValue>({
  chartType: 'candle',
  setType: () => {
    console.log('Type is not rendered!');
  }
});

interface Props {
  initial: string;
  children?: ReactNode;
}

export const ChartProvider = memo<Props>((props) => {
  const [chartType, setType] = useState<string>(props.initial)

  const SetChartTypeCallback = useCallback((newChartType: string) => {
    setType((currentType: string) => {
      return newChartType;
    })
  }, [])

  const MemoizedValue = useMemo(() => {
    const value: ProvidedValue = {
      chartType,
      setType: SetChartTypeCallback,
    };
    return value;
  }, [chartType, SetChartTypeCallback]);

  return <ChartContext.Provider value={MemoizedValue}>{props.children}</ChartContext.Provider>
})

export const useType = () => useContext(ChartContext)