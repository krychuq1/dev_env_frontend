import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'sign-up',
  templateUrl: 'sign-up.html',
  styleUrls: ['sign-up.scss']
})
export class SignUp {
  public  user: any;

  constructor(
    public dialogRef: MatDialogRef<SignUp>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.user = {
      name: null,
      lastName: null,
      mail: null,
      password: null
    };
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  signUp() {
    console.log('sign up form ', this.user);
  }

}
