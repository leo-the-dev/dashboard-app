import { Component, OnInit } from '@angular/core';

const LINECHART_MOCK_DATA: any[] = [
  {data : [32, 14, 46, 23, 38], label : 'Sentiment Analysis'},
  {data : [32, 84, 26, 23, 38], label : 'Image Recognition'},
  {data : [32, 14, 76, 13, 88], label : 'Forecasting'}
];

const LINECHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

const LINECHART_COLORS = [
  {
    backgroundColor: 'rgba(6, 214, 160, 0.2)',
    borderColor : 'rgba(0, 200, 140, 0.5)',
    pointBackgroundColor : '#000',
    pointBorderColor : '#000',
    pointHoverBackgroundColor : '#555',
    pointHoverBorderColor : '#555'
  },
  {
    backgroundColor: 'rgba(255, 209, 102, 0.2)',
    borderColor : 'rgba(240, 180, 89, 0.5)',
    pointBackgroundColor : '#000',
    pointBorderColor : '#000',
    pointHoverBackgroundColor : '#555',
    pointHoverBorderColor : '#555'
  },
  {
    backgroundColor: 'rgba(15, 78, 133, 0.2)',
    borderColor : 'rgba(3, 64, 128, 0.2)',
    pointBackgroundColor : '#000',
    pointBorderColor : '#000',
    pointHoverBackgroundColor : '#555',
    pointHoverBorderColor : '#555'
  }
];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  public lineChartData = LINECHART_MOCK_DATA;
  public lineChartLabels = LINECHART_LABELS;
  public lineChartLegend = true;
  public lineChartType = 'line';
  lineChartColors = LINECHART_COLORS;
  public lineChartOptions: any = {
    responsive : true
  };

  ngOnInit(): void {
  }

}
