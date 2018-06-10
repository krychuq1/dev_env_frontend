import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'login',
  templateUrl: 'login.html',
  styleUrls: ['login.scss']
})
export class Login {
  public login: any;
  public error: string;

  constructor(
    public dialogRef: MatDialogRef<Login>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) {
    this.login = {
      email: null,
      password: null
    };
    this.insertTestValues();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  insertTestValues() {
    this.login.email = 'adam@admin.com';
    this.login.password = 'admin1234';
  }
  loginUser() {
    this.userService.login(this.login).then(data => {
      this.dialogRef.close();
    }, err => {
        console.log(err, '< ----- err ')
        this.error = 'User name or password is invalid';
    });
  }

}
