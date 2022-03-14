import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  chartOption: EChartsOption = {
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
        name: 'Lucro x Risco',
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
          { value: 8, name: 'Lucro' },
          { value: 4, name: 'Risco' },
        ],
        color: ['#AEF1A3', '#F1A3BA'],
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
