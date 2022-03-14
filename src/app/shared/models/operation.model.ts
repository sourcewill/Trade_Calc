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