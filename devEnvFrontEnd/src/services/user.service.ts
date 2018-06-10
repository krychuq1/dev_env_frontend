import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import backend from '../variables';
import {User} from '../modals/user.model';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class UserService {
  private url = backend + 'employees/login';
  private headers = new HttpHeaders();
  private user: User;
  public token: string;
  public userEmitter: EventEmitter<User> = new EventEmitter();

  constructor(private http: HttpClient, protected localStorage: LocalStorage) {}

  login(loginInfo) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, loginInfo).subscribe((data) => {
        this.user = data['employee'];
        console.log(data['token']);
        this.localStorage.setItem('token', data['token']).subscribe((val) => {
          this.token = data['token'];
          this.userEmitter.emit(this.user);

        });
        resolve(true);
      }, (err) => {
        reject(false);
      });
    });
  }
  logout() {
    console.log('log out');

    this.localStorage.removeItem('token').subscribe((val) => {
      console.log(val);
      this.userEmitter.emit(null);
    });
    // this.localStorage
  }
  getUserBasedToken(token: string) {
    const url = backend + 'employees/getEmployee';
    this.headers = this.headers.set('x-access-token', token);
    this.http.get(url, {headers: this.headers}).subscribe((data) => {
      this.user = new User(data['firstname'], data['lastname'], data['email'], data['role'], data['password']);
      this.token = token;
      this.userEmitter.emit(this.user);
    });
  }
  addUser(token: string, user: User) {
    const url = backend + 'employees/signup';
    this.headers = this.headers.set('x-access-token', token);
    return this.http.post(url, user,{ headers: this.headers} );
  }
}

