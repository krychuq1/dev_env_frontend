import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'create-job-dialog',
  templateUrl: 'create-job.html',
  styleUrls: ['create-job.scss']
})
export class CreateJob {
  public  job: any;

  constructor(
    public dialogRef: MatDialogRef<CreateJob>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.job = {
      type: 'A',
      quantity: null
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  createJob() {
    console.log('createJob form ', this.job);
  }

}
