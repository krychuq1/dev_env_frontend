import {Component, OnInit} from '@angular/core';
import {CreateJob} from '../dialogs/create-job/create-job';
import {MatDialog} from '@angular/material';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {User} from '../modals/user.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;
  constructor(public dialog: MatDialog,
              protected localStorage: LocalStorage, public userService: UserService) {
    this.userService.userEmitter.subscribe(next => {
      this.user = next;
    });
  }

  openDialog(): void {
    console.log('opening');
    let dialogRef = this.dialog.open(CreateJob, {
      width: 'auto',
    });
  }

  ngOnInit(): void {
    this.localStorage.getItem('token').subscribe(token => {
      if (token){
        this.userService.getUserBasedToken(token);
      }
    })
  }
}
