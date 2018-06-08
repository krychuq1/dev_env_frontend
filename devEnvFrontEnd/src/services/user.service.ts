import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import backend from '../variables';

@Injectable()
export class LoginService {
  private url = backend + 'employees/login';
  constructor(private http: HttpClient) {}

  login(loginInfo) {
    return this.http.post(this.url, loginInfo);

  }

}

