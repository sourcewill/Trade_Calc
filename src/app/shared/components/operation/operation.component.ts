import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setOperationResults } from '../../actions/operation.action';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
})
export class OperationComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  handleCalculate() {
    this.store.dispatch(
      setOperationResults({
        payload: {
          totalPosition: 0,
          profitValue: 0,
          profitPercent: 0,
          lossValue: 0,
          lossPercent: 0,
        },
      })
    );
  }
}
