import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {CreateJob} from '../dialogs/create-job/create-job';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {Header} from './components/header';
import {SignUp} from '../dialogs/sign-up/sign-up';
import {Login} from '../dialogs/login/login';
import {LoginService} from '../services/user.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateJob,
    Header,
    SignUp,
    Login
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  entryComponents: [CreateJob, SignUp, Login],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
