import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false; // only enable "Add user " if the required fields are filled out. 
  showUserForm: boolean = false; // default dont show the form

  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'jon@gmail.com',
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          email: 'jon@gmail.com',
          isActive: false,
          registered: new Date('03/11/2017 06:20:00'),
          hide: true
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          email: 'jon@gmail.com',
          isActive: true,
          registered: new Date('11/02/2016 10:30:00'),
          hide: true
        }
      ];

      this.loaded = true;
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);  // this.user is the container that has picked up the input values.

  //   // once added we want to clear the form out.  
  //   this.user: User = {
  //     firstName: '',
  //     lastName: '', 
  //     email: ''
  //   };
  // }



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
