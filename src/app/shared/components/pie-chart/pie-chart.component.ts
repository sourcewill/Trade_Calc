import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  hasData: boolean = true;

  chartOption: EChartsOption = {};

  constructor() { }

  ngOnInit(): void {
    this.configureChart(400, 200);
  }

  configureChart(profit: number, loss: number){
    this.chartOption = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        bottom: '-5px',
        left: 'center',
        textStyle: {
          color: '#FDFEFF'
        }
      },
      series: [
        {
          name: 'Lucro x Prejuizo',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold',
              color: '#FDFEFF'
              
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: profit, name: 'Lucro' },
            { value: loss, name: 'Prejuizo' },
          ],
          color: ['#AEF1A3', '#F1A3BA'],
        }
      ]
    };
  }

}
