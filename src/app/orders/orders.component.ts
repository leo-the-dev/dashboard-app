import { Component, OnInit } from '@angular/core';
import { Order } from '../dtos/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  public orders: Order[] = [
    {
      id: 1,
      customer: {
        id: 123,
        name: 'leo',
        email: 'leo.pol@gmail.com',
        state: 'developing'
      },
      amount: 32.22,
      placed: new Date(2020, 11, 1),
      fulfilled: new Date(2020, 12, 1)
    },
    {
      id: 2,
      customer: {
        id: 456,
        name: 'pippo',
        email: 'pippo@gmail.com',
        state: 'waiting'
      },
      amount: 120.22,
      placed: new Date(2020, 2, 1),
      fulfilled: new Date(2020, 6, 1)
    },
    {
      id: 3,
      customer: {
        id: 917,
        name: 'paperino',
        email: 'paper@gmail.com',
        state: 'fucking'
      },
      amount: 330.22,
      placed: new Date(2020, 11, 1),
      fulfilled: new Date(2020, 12, 1)
    }
  ];

  ngOnInit(): void {
  }

}
