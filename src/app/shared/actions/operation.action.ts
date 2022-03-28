import { createAction, props } from '@ngrx/store';
import { IOperationResults } from '../models/operation.model';

export const setOperationResults = createAction(
  '[Operation Results] Set',
  props<{ payload: IOperationResults }>()
);
