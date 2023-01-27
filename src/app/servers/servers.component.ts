import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName  = 'Testserver';
  serverCreated = false;
  servers = ['Testeserver', 'Testserver 2'];
  details: boolean = false;
  clickCount = 0 ;
  clicks: Array<any> = [];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is' +  this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
    console.log(event)
  }

  toggle(click) {
    this.details = !this.details;
    this.clickCount++;
    this.clicks.push(this.clickCount);
    console.log(this.clicks);
  }

}
