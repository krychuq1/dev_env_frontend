import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../../modals/user.model';
import {UserService} from '../../services/user.service';
import {LocalStorage} from '@ngx-pwa/local-storage';

@Component({
  selector: 'sign-up',
  templateUrl: 'sign-up.html',
  styleUrls: ['sign-up.scss']
})
export class SignUp {
  public  user: User;
  public error: string;
  public isDone: boolean;

  constructor(
    public dialogRef: MatDialogRef<SignUp>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService,  protected localStorage: LocalStorage) {
    this.user = new User('', '', '', '', '');
    // test value
    // this.user = new User('test', 'test', 'test@test.com', 'basicPrivilege', 'master');
  }
  close(): void {
    this.dialogRef.close();
  }
  signUp() {
    this.localStorage.getItem('token').subscribe(token => {
      this.userService.addUser(token, this.user).subscribe(created => {
        this.isDone = true;
      }, error => {
        this.error = 'Something went wrong';
      });
    });
  }

}
