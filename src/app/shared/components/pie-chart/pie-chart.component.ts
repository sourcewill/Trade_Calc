import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EChartsOption } from 'echarts';
import {
  selectIsLoadingOperationResults,
  selectOperationResults,
} from '../../selectors/operation.selector';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  isLoadingOperationResults: boolean = true;

  chartOption: EChartsOption = {};

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(selectIsLoadingOperationResults)
      .subscribe((data) => (this.isLoadingOperationResults = data));
    this.store.select(selectOperationResults).subscribe((data) => {
      this.configureChart(data.profitValue, Math.abs(data.lossValue));
    });
  }

  configureChart(profit: number, loss: number) {
    this.chartOption = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        bottom: '-5px',
        left: 'center',
        textStyle: {
          color: '#FDFEFF',
        },
      },
      series: [
        {
          name: 'Lucro x Prejuizo',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold',
              color: '#FDFEFF',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: profit, name: 'Lucro' },
            { value: loss, name: 'Prejuizo' },
          ],
          color: ['#AEF1A3', '#F1A3BA'],
        },
      ],
    };
  }
}
