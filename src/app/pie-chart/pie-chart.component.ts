import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  public pieChartData: number[] = [300, 450, 120];
  public pieChartLabels: string[] = ['leo', 'pluto', 'pippo'];
  public pieChartColors: any[] = [
    { backgroundColor : ['#26547c', '#ff6b6b', '#ffd166'], borderColor : '#111'}
  ];
  pieChartType = 'doughnut';

  ngOnInit(): void {
  }

}
