export class JobHistoryModel {
  id: number;
  jobid: number;
  email: string;
  datetime: DateTimeFormat;
  constructor(id: number, jobid: number, email: string, datetime: DateTimeFormat){
    this.id = id;
    this.jobid = jobid;
    this.email = email;
    this.datetime = datetime;
  }

}
