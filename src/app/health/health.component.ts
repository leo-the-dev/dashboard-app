import { Component, OnInit } from '@angular/core';
import { Server } from '../dtos/server';

const SERVER_MOCK_DATA: Server[] = [
  {id: 1, name: 'leo-server', status: true},
  {id: 2, name: '🥶', status: false},
  {id: 3, name: '😎', status: true},
  {id: 4, name: '😂', status: false},
  {id: 5, name: '😀', status: true}
];

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  constructor() { }

  public servers = SERVER_MOCK_DATA;

  ngOnInit(): void {
  }

}
