import {Injectable} from '@angular/core';
import backend from '../variables';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class JobHistoryService {
  private url = backend + 'jobHistories/all';
  private headers = new HttpHeaders();
  constructor(private http: HttpClient) {}

  getAllJobHistory(token: string) {
    this.headers = this.headers.set('x-access-token', token);
    return this.http.get(this.url, {headers: this.headers});
  }

}
