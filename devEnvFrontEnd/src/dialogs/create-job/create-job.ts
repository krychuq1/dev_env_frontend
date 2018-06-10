import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {WarehouseModel} from '../../modals/warehouse.model';
import {Job} from '../../modals/job.model';
import {JobService} from '../../services/job.service';

@Component({
  selector: 'create-job-dialog',
  templateUrl: 'create-job.html',
  styleUrls: ['create-job.scss']
})
export class CreateJob {
  public  job: Job;
  public warehouses: WarehouseModel[];
  public isDone: boolean;

  constructor(
    public dialogRef: MatDialogRef<CreateJob>,
    @Inject(MAT_DIALOG_DATA) public data: any, private jobService: JobService) {
    this.job = new Job(null, 'A', null, 'no');
    this.warehouses = data.warehouses;
  }

  close(): void {
    this.dialogRef.close();
  }
  createJob() {
    const status = 'incoming';
    this.jobService.createJob(this.data.token, this.job, status).subscribe(created => {
      this.isDone = true;

    }, error => {
      console.log(error);
    });
  }

}
