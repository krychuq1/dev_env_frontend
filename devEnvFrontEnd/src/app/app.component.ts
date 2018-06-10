import {Component, OnInit} from '@angular/core';
import {CreateJob} from '../dialogs/create-job/create-job';
import {MatDialog} from '@angular/material';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {User} from '../modals/user.model';
import {UserService} from '../services/user.service';
import {SignUp} from '../dialogs/sign-up/sign-up';
import {WarehouseModel} from '../modals/warehouse.model';
import {ViewJobHistory} from '../dialogs/view-job-history/view-job-history';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: User;
  token: string;
  warehouses: WarehouseModel[];
  constructor(public dialog: MatDialog,
              protected localStorage: LocalStorage, public userService: UserService) {
    this.userService.userEmitter.subscribe(next => {
      this.user = next;
      this.token = this.userService.token;
    });
    this.localStorage.getItem('token').subscribe(token => {
      if (token) {
        this.userService.getUserBasedToken(token);
      }
    });
  }

  openDialog(): void {
    console.log('opening');
    let dialogRef = this.dialog.open(CreateJob, {
      width: 'auto',
      data: {
        token: this.token,
        warehouses: this.warehouses
      }
    });
  }
  signUp() {
    this.dialog.open(SignUp);
  }
  setWarehouses(warehouses) {
    this.warehouses = warehouses;
  }
  openHistory(){
    let dialogRef = this.dialog.open(ViewJobHistory, {
      width: 'auto',
      data: {
        token: this.token,
      }
    });
  }

  ngOnInit(): void {

  }
}
