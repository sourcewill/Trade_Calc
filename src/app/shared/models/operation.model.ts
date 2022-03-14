export enum OperationTypeEnum{
    BUY,
    SELL
}

export interface OperationModel{
    type: OperationTypeEnum;
    amount: number;
    entryValue: number;
    targetValue: number;
    stopValue: number;
}

export interface OperationResultsModel{
    totalPosition: number;
    profitValue: number;
    profitPercent: number;
    lossValue: number;
    lossPercent: number;
}