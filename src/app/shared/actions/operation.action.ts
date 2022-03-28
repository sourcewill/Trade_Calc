import { createAction, props } from '@ngrx/store';
import { IOperationResults } from '../models/operation.model';

export const setOperationResults = createAction(
  '[Operation Results] Set',
  props<{ payload: IOperationResults }>()
);

export const setIsLoadingOperationResults = createAction(
  '[Loading Operation Results] Set',
  props<{ payload: boolean }>()
);
