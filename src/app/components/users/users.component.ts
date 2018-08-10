import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/User';
import { compileNgModule } from '@angular/compiler';
import { UserService } from '../../services/user.service';

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
  @ViewChild('userForm') form: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers(); // calling the service to get the data
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

  onClick(e){
    console.log('right click or regular clikc');
  }

  toggleHide(user: User) {
    if(user.hide === false) {
      user.hide = true;
    } else {
      user.hide = false;
    }
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.userService.addUser(value); // calling the service to push data into it. 
      this.form.reset();
    }
    console.log('form has been submitted');
  }

}
/*
DataService:
In this case, we are using this service to get a bumch of data. 
Now we are hardcoding the data and previous we had used a users array to store it.
but now we are using a separate DataService class to pull in that data. 

Observable:
These are data streams that you can subscribe to can cause an event to be fired when something in the observable is updated. 

*/
