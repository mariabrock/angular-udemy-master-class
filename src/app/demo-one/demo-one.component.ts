import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-one',
  templateUrl: './demo-one.component.html',
  styleUrls: ['./demo-one.component.css']
})
export class DemoOneComponent implements OnInit {

  username: string = '';
  createUser: boolean = false;
  userCreationStatus: string = 'No user was created!';
  users: any = [];

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
    this.userCreationStatus = 'No user was created!';
  }

}
