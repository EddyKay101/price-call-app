import React from 'react';
import { useType } from '@contexts/ChartContext';

type Generator<T extends {}> = (chartType: string) => T;

export const useChartAwareObject = <T extends {}>(fn: Generator<T>) => {
  const { chartType } = useType();

  const ChartAwareObject = React.useMemo(() => fn(chartType), [fn, chartType]);
  return ChartAwareObject;
};