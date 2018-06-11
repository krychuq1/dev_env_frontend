import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Login} from '../../../dialogs/login/login';
import {UserService} from '../../../services/user.service';
import {User} from '../../../modals/user.model';


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
      console.log('user emitted header ', this.user);

    });
  }

  login() {
    this.dialog.open(Login);

  }
  logout() {
    this.userService.logout();

  }



}
