export enum OperationTypeEnum {
  BUY,
  SELL,
}

export interface IOperation {
  type: OperationTypeEnum;
  amount: number;
  entryValue: number;
  targetValue: number;
  stopValue: number;
}

export interface IOperationResults {
  totalPosition: number;
  profitValue: number;
  profitPercent: number;
  lossValue: number;
  lossPercent: number;
}
