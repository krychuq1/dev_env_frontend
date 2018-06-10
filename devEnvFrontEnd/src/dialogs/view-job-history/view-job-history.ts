import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../../modals/user.model';
import {JobHistoryService} from '../../services/jobHistory.service';
import {JobHistoryModel} from '../../modals/jobHistory.model';

@Component({
  selector: 'view-job-history',
  templateUrl: 'view-job-history.html',
  styleUrls: ['view-job-history.scss']
})
export class ViewJobHistory {
  public error: string;
  public isDone: boolean;
  jobHistory: JobHistoryModel[];

  constructor(
    public dialogRef: MatDialogRef<ViewJobHistory>,
    @Inject(MAT_DIALOG_DATA) public data: any, private jobHistoryService: JobHistoryService) {
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
