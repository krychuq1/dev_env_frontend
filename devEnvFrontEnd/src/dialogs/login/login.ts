import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'login',
  templateUrl: 'login.html',
  styleUrls: ['login.scss']
})
export class Login {
  public login: any;

  constructor(
    public dialogRef: MatDialogRef<Login>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.login = {
      mail: null,
      password: null
    };
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  loginUser() {
    console.log('login  form ', this.login);
  }

}
