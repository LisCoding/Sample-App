import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowPollComponent } from './show-poll/show-poll.component';
import { CreateComponent } from './create/create.component';
//imported
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PollApiService } from "./poll-api.service"

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ShowPollComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [PollApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
