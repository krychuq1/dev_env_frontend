import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {LoginService} from '../../services/user.service';
@Component({
  selector: 'login',
  templateUrl: 'login.html',
  styleUrls: ['login.scss']
})
export class Login {
  public login: any;

  constructor(
    public dialogRef: MatDialogRef<Login>,
    @Inject(MAT_DIALOG_DATA) public data: any, private loginService: LoginService) {
    this.login = {
      mail: null,
      password: null
    };
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  loginUser() {
    this.loginService.login(this.login).subscribe((data) => {
      console.log(data, 'after loggin');
    }, (err) => {
      console.log(err);
    });
  }

}
