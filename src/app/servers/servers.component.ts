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
  limit = 4;


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
    this.serverCreationStatus = 'Server was created! Name is ' +  this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
    console.log(event)
  }

  toggle(clickCount) {
    this.details = !this.details;
    this.clickCount++;
    this.clicks.push(this.clickCount);
    console.log(this.clicks); //here I've gotten the array with all numbers to print out in console
  }

  getColor(i: number):  string {
    const index = this.clicks;
    console.log(index.length-1); //here I have printed out the index of each number
    if(i >= this.limit) {
      return 'steelblue';
    }else{
      return 'white';
    }
  }
}

