import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { PostsComponent } from './components/posts/posts.component';
// right click menu
import {ShContextMenuModule} from 'ng2-right-click-menu';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent,
    PostsComponent
  ],
  imports: [
    ShContextMenuModule,
    FormsModule,
    BrowserModule
  ],
  providers: [UserService, PostService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
