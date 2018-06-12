import {Injectable} from '@angular/core';
import backend from '../variables';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class JobHistoryService {
  private url = backend + 'jobHistories';
  private headers = new HttpHeaders();
  constructor(private http: HttpClient) {}

  getAllJobHistory(token: string) {
    this.headers = this.headers.set('x-access-token', token);
    return this.http.get(this.url + '/all', {headers: this.headers});
  }
  // once job is updated and we are sure that on the backend items are in wh_chem
  // emit that i change status of the job
  updateStatusOfSelectedJob(token: string, jobid: number, status: string){
    const jobObj = {
      id: jobid,
      status: status
    };
    this.headers = this.headers.set('x-access-token', token);
    console.log('the url is: ', this.url);
    return this.http.post(this.url + '/update', jobObj, {headers: this.headers});
  }


}
