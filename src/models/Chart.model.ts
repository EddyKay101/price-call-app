export interface Chart {
    chart: [
        {
            close: number;
            date?: Date;
            high: number;
            low: number;
            open: number;
            x?: Date;
        }
    ];
}

export interface ChartObj {
    close: number;
    high: number;
    low: number;
    open: number;
    x?: Date;
}
