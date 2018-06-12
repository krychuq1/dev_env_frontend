import {EventEmitter, Injectable} from '@angular/core';
import backend from '../variables';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Job} from '../modals/job.model';
import {User} from "../modals/user.model";

@Injectable()
export class JobService {
  private url = backend + 'jobs/';
  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {}

  createJob(token: string, job: Job, status: string) {
    return new Promise ((resolve, reject ) => {
      const obj = {
        job: job,
        status: status
      };
      this.headers = this.headers.set('x-access-token', token);
      console.log('the url is: ', this.url);
      this.http.post(this.url, obj, {headers: this.headers}).subscribe(created => {
        resolve(created);
      }, error => {
        reject(error);
      });
    })

  }
  getJobById(token:string, jobId: number){
    this.headers = this.headers.set('x-access-token', token);
    return this.http.get(this.url + jobId, ({headers:this.headers}));
  }

}
