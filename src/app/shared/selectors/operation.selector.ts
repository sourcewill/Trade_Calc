import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  IOperationState,
  operationFeatureKey,
} from '../reducers/operation.reducer';

export const operationFeature =
  createFeatureSelector<IOperationState>(operationFeatureKey);

export const selectOperationResults = createSelector(
  operationFeature,
  (state: IOperationState) => state.operationResults
);
export const selectIsLoadingOperationResults = createSelector(
  operationFeature,
  (state: IOperationState) => state.isLoadingOperationResults
);
