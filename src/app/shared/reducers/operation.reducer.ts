import { createReducer, on } from '@ngrx/store';
import { setIsLoadingOperationResults, setOperationResults } from '../actions/operation.action';
import { IOperationResults } from '../models/operation.model';

export const operationFeatureKey = 'operation';

export interface IOperationState {
  operationResults: IOperationResults;
  isLoadingOperationResults: boolean;
}

export const initialState: IOperationState = {
  isLoadingOperationResults: true,
  operationResults: {
    totalPosition: 0.0,
    profitValue: 0.0,
    profitPercent: 0.0,
    lossValue: 0.0,
    lossPercent: 0.0,
  },
};

export const _operationReducer = createReducer(
  initialState,
  on(setOperationResults, (state: IOperationState, action) => {
    return {
      ...state,
      operationResults: action.payload,
    };
  }),
  on(setIsLoadingOperationResults, (state: IOperationState, action) => {
    return {
      ...state,
      isLoadingOperationResults: action.payload,
    };
  })
);

export function operationReducer(state: any, action: any) {
  return _operationReducer(state, action);
}
