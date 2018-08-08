import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false; // default dont show the form

  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 70,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
            street: '20 School st',
            city: 'Lynn',
            state: 'MA'
          },
          isActive: false,
          registered: new Date('03/11/2017 06:20:00'),
          hide: true
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
            street: '55 Mill st',
            city: 'Miami',
            state: 'FL'
          },
          isActive: true,
          registered: new Date('11/02/2016 10:30:00'),
          hide: true
        }
      ];

      this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  fireEvent(e) { 
    // console.log('button event clicked');
    console.log(e.type);
    console.log(e.target.value);
  }

  toggleHide(user: User) {
    if(user.hide === false) {
      user.hide = true;
    } else {
      user.hide = false;
    }
  }

  onSubmit(e){
    console.log('form has been submitted');
    e.preventDefault();
  }
}
