import {Injectable} from '@angular/core';
import backend from '../variables';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Job} from '../modals/job.model';

@Injectable()
export class JobService {
  private url = backend + 'jobs';
  private headers = new HttpHeaders();
  constructor(private http: HttpClient) {}

  createJob(token: string, job: Job, status: string) {
    const obj = {
      job: job,
      status: status
    };
    this.headers = this.headers.set('x-access-token', token);
    console.log('the url is: ', this.url);
    return this.http.post(this.url, obj, {headers: this.headers});
  }

}
