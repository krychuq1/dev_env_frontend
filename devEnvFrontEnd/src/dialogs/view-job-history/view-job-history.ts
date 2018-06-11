import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../../modals/user.model';
import {JobHistoryService} from '../../services/jobHistory.service';
import {JobHistoryModel} from '../../modals/jobHistory.model';

@Component({
  selector: 'view-job-history',
  templateUrl: 'view-job-history.html',
  styleUrls: ['view-job-history.scss']
})
export class ViewJobHistory{
  public error: string;
  public isDone: boolean;
  jobHistory: JobHistoryModel[];
  selectedJobId;

  constructor(
    public dialogRef: MatDialogRef<ViewJobHistory>,
    @Inject(MAT_DIALOG_DATA) public data: any, private jobHistoryService: JobHistoryService) {
    this.getAllJobs();
  }
  viewDetails(jobId) {
    console.log('jop id ', jobId);
    this.selectedJobId = jobId;
  }
  saveStatusChange(status){
    console.log('You clicked: status change with ', this.selectedJobId , ' and ', status);
    if(this.selectedJobId&&status){
      this.jobHistoryService.updateStatusOfSelectedJob(this.data.token, this.selectedJobId, status).subscribe(created => {
        this.isDone = true;
        this.getAllJobs();
      }, error => {
        console.log(error);
      });
    }
  }
  getAllJobs(){
    this.jobHistoryService.getAllJobHistory(this.data.token).subscribe(history => {
      this.jobHistory = history as JobHistoryModel[];
      console.log(this.jobHistory);

    }, error1 => {

    });
  }

  close(): void {
    this.dialogRef.close();
  }

}
