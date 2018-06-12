import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../../modals/user.model';
import {JobHistoryService} from '../../services/jobHistory.service';
import {JobHistoryModel} from '../../modals/jobHistory.model';
import {JobService} from '../../services/job.service';
import {WarehousesService} from "../../services/warehouses.service";

@Component({
  selector: 'view-job-history',
  templateUrl: 'view-job-history.html',
  styleUrls: ['view-job-history.scss']
})
export class ViewJobHistory {
  public error: string;
  public isDone: boolean;
  jobHistory: JobHistoryModel[];
  selectedJob;

  constructor(
    public dialogRef: MatDialogRef<ViewJobHistory>,
    @Inject(MAT_DIALOG_DATA) public data: any, private jobHistoryService: JobHistoryService, private jobService: JobService, private warehousesService: WarehousesService) {
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
        this.getJobById(this.data.token, this.selectedJob);
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
  getJobById(token, jobid){
    this.jobService.getJobById(token, jobid).subscribe(job =>{
      console.log('THis is job returned ', job);
      this.warehousesService.postInWarehouseInventory(token, job[0].warehouseid, job[0].chemicalid, job[0].chemicalquantity).then( response =>{
        console.log('This is what is posted in inventory now: ', response);
      })
    })
  }

  close(): void {
    this.dialogRef.close();
  }


}
