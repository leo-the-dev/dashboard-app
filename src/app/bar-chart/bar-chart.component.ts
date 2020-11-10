import { Component, OnInit } from '@angular/core';

const BARCHART_MOCK_DATA: any[] = [
  {data : [60, 55, 85, 25, 35, 40], label : 'Winter Sales'},
  {data : [50, 25, 35, 45, 75, 90], label : 'Spring Sales'}
];

const BARCHART_LABELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = BARCHART_MOCK_DATA;
  public barChartLabels: string[] = BARCHART_LABELS;
  public barChartLegend = true;
  public barChartType = 'bar';
  public barChartOptions: any = {
    scaleShowVerticalLines : false,
    responsive : true
  };

  ngOnInit(): void {
  }
}
