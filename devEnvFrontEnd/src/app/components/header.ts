import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {SignUp} from '../../dialogs/sign-up/sign-up';
import {Login} from '../../dialogs/login/login';


@Component({
  selector: 'header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  constructor(public dialog: MatDialog) {}
  login() {
    this.dialog.open(Login);

  }
  signUp() {
    this.dialog.open(SignUp);
  }


}
