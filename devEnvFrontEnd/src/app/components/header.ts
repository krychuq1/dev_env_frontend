import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {SignUp} from '../../dialogs/sign-up/sign-up';
import {Login} from '../../dialogs/login/login';
import {UserService} from '../../services/user.service';
import {User} from '../../modals/user.model';


@Component({
  selector: 'header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  user: User;
  constructor(public dialog: MatDialog, public userService: UserService ) {
    this.userService.userEmitter.subscribe(next => {
      this.user = next;
    });
  }

  login() {
    this.dialog.open(Login);

  }
  logout() {
    this.userService.logout();

  }
  signUp() {
    this.dialog.open(SignUp);
  }


}
