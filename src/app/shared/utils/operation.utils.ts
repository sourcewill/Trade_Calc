import { IOperation, IOperationResults, OperationTypeEnum } from "../models/operation.model";

export function stringOperationAdapter(
  typeString: string,
  amountString: string,
  entryValueString: string,
  targetValueString: string,
  stopValueString: string): IOperation {

    typeString = removeCurrencyCharacters(typeString);
    amountString = removeCurrencyCharacters(amountString);
    entryValueString = removeCurrencyCharacters(entryValueString);
    targetValueString = removeCurrencyCharacters(targetValueString);
    stopValueString = removeCurrencyCharacters(stopValueString);

  let type: OperationTypeEnum = typeString === 'buy' ? OperationTypeEnum.BUY : OperationTypeEnum.SELL;
  let amount: number = parseInt(amountString);
  let entryValue: number = parseFloat(entryValueString);
  let targetValue: number = parseFloat(targetValueString);
  let stopValue: number = parseFloat(stopValueString);
  let operation: IOperation = {
    type: type,
    amount: amount,
    entryValue: entryValue,
    targetValue: targetValue,
    stopValue: stopValue
  };
  return operation;
}

export function removeCurrencyCharacters(value: string) {
  return value.replace('R$ ', '').replace(',', '.');
}

export function calculateOperationResults(operation: IOperation): IOperationResults {
  let results: IOperationResults;
  if (operation.type === OperationTypeEnum.BUY) {
    results = calculateOperationBuyResults(operation);
  } else {
    results = calculateOperationSellResults(operation);
  }
  return results;
}

export function calculateOperationBuyResults(operation: IOperation): IOperationResults {
  let totalPosition = operation.entryValue * operation.amount;
  let profitValue = (operation.targetValue * operation.amount) - totalPosition;
  let profitPercent = profitValue / totalPosition;
  let lossValue = (operation.stopValue * operation.amount) - totalPosition;
  let lossPercent = lossValue / totalPosition;
  let results: IOperationResults = {
    totalPosition: totalPosition,
    profitValue: profitValue,
    profitPercent: profitPercent,
    lossValue: lossValue,
    lossPercent: lossPercent
  };
  return results;
}

export function calculateOperationSellResults(operation: IOperation): IOperationResults {
  let totalPosition = operation.entryValue * operation.amount;
  let profitValue = totalPosition - (operation.targetValue * operation.amount);
  let profitPercent = profitValue / totalPosition;
  let lossValue = totalPosition - (operation.stopValue * operation.amount);
  let lossPercent = lossValue / totalPosition;
  let results: IOperationResults = {
    totalPosition: totalPosition,
    profitValue: profitValue,
    profitPercent: profitPercent,
    lossValue: lossValue,
    lossPercent: lossPercent
  };
  return results;
}