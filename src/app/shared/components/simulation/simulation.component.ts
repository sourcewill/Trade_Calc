import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IOperationResults } from '../../models/operation.model';
import {
  selectIsLoadingOperationResults,
  selectOperationResults,
} from '../../selectors/operation.selector';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css'],
})
export class SimulationComponent implements OnInit {
  isLoadingOperationResults: boolean = true;
  operationResults: IOperationResults = {
    totalPosition: 0,
    profitValue: 0,
    profitPercent: 0,
    lossValue: 0,
    lossPercent: 0,
  };

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(selectIsLoadingOperationResults)
      .subscribe((data) => (this.isLoadingOperationResults = data));
    this.store
      .select(selectOperationResults)
      .subscribe((data) => (this.operationResults = data));
  }
}
