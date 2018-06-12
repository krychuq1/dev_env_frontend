import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {JobHistoryService} from '../../services/jobHistory.service';
import {JobHistoryModel} from '../../modals/jobHistory.model';
import {ViewJobHistory} from "../view-job-history/view-job-history";

@Component({
  selector: 'view-active-jobs',
  templateUrl: 'view-active-jobs.html',
  styleUrls: ['view-active-jobs.scss']
})
export class ViewActiveJobs {
  public error: string;
  public isDone: boolean;
  jobHistory: JobHistoryModel[];
  selectedJob;

  constructor(
    public dialogRef: MatDialogRef<ViewJobHistory>,
    @Inject(MAT_DIALOG_DATA) public data: any, private jobHistoryService: JobHistoryService) {
    this.jobHistoryService.getAllJobHistory(this.data.token).subscribe(history => {
      this.jobHistory = history as JobHistoryModel[];
      console.log(this.jobHistory);

    }, error1 => {

    });
  }
  viewDetails(jobId) {
    console.log('jop id ', jobId);
    this.selectedJob = jobId;
  }
  saveStatusChange(status){
    console.log('You clicked: status change with ', this.selectedJob , ' and ', status);
    if(this.selectedJob&&status){
      this.jobHistoryService.updateStatusOfSelectedJob(this.data.token, this.selectedJob, status).then(created => {
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
