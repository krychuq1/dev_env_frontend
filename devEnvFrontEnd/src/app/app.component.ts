import { Component } from '@angular/core';
import {CreateJob} from '../dialogs/create-job/create-job';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    console.log('opening');
    let dialogRef = this.dialog.open(CreateJob, {
      width: 'auto',
    });
  }
}
