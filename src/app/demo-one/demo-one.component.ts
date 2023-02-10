import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-one',
  templateUrl: './demo-one.component.html',
  styleUrls: ['./demo-one.component.css']
})
export class DemoOneComponent implements OnInit {

  username: string = '';
  password: string = '';
  createUser: boolean = false;
  userCreationStatus: string = 'No user was created!';
  users: any = [];
  details: boolean = false;
  clickCount = 0 ;
  clicks: Array<any> = [];
  limit = 4;

  constructor() { }

  ngOnInit(): void {
  }

  onCreateUser() {
    this.createUser = true;
    this.users.push(this.username);
    this.userCreationStatus = 'User was created! Name is ' +  this.username;
  }

  onReset() {
    this.username = '';
    this.password = '';
    this.userCreationStatus = 'No user was created!';
  }

  toggle(clickCount) {
    this.details = !this.details;
    this.clickCount++;
    // this.clicks.push(this.clickCount);
    this.clicks.push(new Date());
    console.log(this.clicks); // here I've gotten the array with all numbers to print out in console
  }

  getColor(i: number):  string {
    const index = this.clicks;
    console.log(index.length-1); // here I have printed out the index of each number
    if(i >= this.limit) {
      return 'steelblue';
    }else{
      return 'white';
    }
  }

}
