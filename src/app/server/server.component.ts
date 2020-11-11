import { Component, Input, OnInit } from '@angular/core';
import { Server } from '../dtos/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  constructor() { }

  color: string;
  buttonText: string;

  @Input() server: Server;

  ngOnInit(): void {
    this.setServerStatus(this.server.status);
  }

  toggleStatus(status: boolean): void {
    this.setServerStatus(!status)
  }

  setServerStatus(status: boolean): void {
    if (status) {
      this.server.status = true;
      this.color = '#66bb6a';
      this.buttonText = 'Shut Down';
    } else {
      this.server.status = false;
      this.color = '#ff6b6b';
      this.buttonText = 'Start';
    }
  }
}
