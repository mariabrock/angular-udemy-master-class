import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css']
  styles: [`
  .online {
  color: white
  }`]

})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'offline';
  username: string = 'username';

  getServerStatus() {
    return this.serverStatus;
  }

  onReset() {
    this.username = '';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
  }

  ngOnInit(): void {
  }

}
