import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setIsLoadingOperationResults, setOperationResults } from '../../actions/operation.action';
import { IOperation, IOperationResults, OperationTypeEnum } from '../../models/operation.model';
import { calculateOperationResults, stringOperationAdapter } from '../../utils/operation.utils';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
})
export class OperationComponent implements OnInit {
  constructor(private store: Store) { }

  ngOnInit(): void { }

  handleCalculate(
    event: any,
    typeString: string,
    amountString: string,
    entryValueString: string,
    targetValueString: string,
    stopValueString: string): void {

    event.preventDefault();
    this.store.dispatch(setIsLoadingOperationResults({ payload: true }));

    let operation: IOperation = stringOperationAdapter(typeString, amountString, entryValueString, targetValueString, stopValueString);
    let results: IOperationResults = calculateOperationResults(operation);

    this.store.dispatch(setOperationResults({ payload: results }));
    this.store.dispatch(setIsLoadingOperationResults({ payload: false }));

  }

}
