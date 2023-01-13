import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'offline';
  isString: boolean = false;
  username: string = 'Username';

  getServerStatus() {
    return this.serverStatus;
  }

  onReset() {
    this.username = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
