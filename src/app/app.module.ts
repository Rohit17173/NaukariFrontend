import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavabarComponent } from './navabar/navabar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';
import { HomeComponent } from './home/home.component';
import { RegistercompanyComponent } from './registercompany/registercompany.component';
import { CompanyloginComponent } from './companylogin/companylogin.component';
import { CompanyhomeComponent } from './companyhome/companyhome.component';
import { AddrecruterComponent } from './companyhome/addrecruter/addrecruter.component';
import { AddjobComponent } from './companyhome/addjob/addjob.component';
import { ViewrecruiterComponent } from './companyhome/viewrecruiter/viewrecruiter.component';
import { RecruterloginComponent } from './recruterlogin/recruterlogin.component';
import { RecruterhomeComponent } from './recruterhome/recruterhome.component';
import { AddjobRecruterComponent } from './recruterhome/addjob-recruter/addjob-recruter.component';
import { ViewcompjobComponent } from './recruterhome/viewcompjob/viewcompjob.component';
import { ViewjobsComponent } from './user/viewjobs/viewjobs.component';
import { MyProfileComponent } from './user/my-profile/my-profile.component';
import { AppliedjobsComponent } from './user/appliedjobs/appliedjobs.component';
import { SearchjobComponent } from './user/searchjob/searchjob.component';
import { ViewapplicantsComponent } from './recruterhome/viewapplicants/viewapplicants.component';
import { ComnavbarComponent } from './companyhome/comnavbar/comnavbar.component';
import { ComdashboardComponent } from './companyhome/comdashboard/comdashboard.component';
import { EditEducationComponent } from './user/edit-education/edit-education.component';
import { ActivejobsComponent } from './recruterhome/activejobs/activejobs.component';
import { ClosedjobsComponent } from './recruterhome/closedjobs/closedjobs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavabarComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    NotfoundcomponentComponent,
    HomeComponent,
    RegistercompanyComponent,
    CompanyloginComponent,
    CompanyhomeComponent,
    AddrecruterComponent,
    AddjobComponent,
    ViewrecruiterComponent,
    RecruterloginComponent,
    RecruterhomeComponent,
    AddjobRecruterComponent,
    ViewcompjobComponent,
    MyProfileComponent,
    ViewjobsComponent,
    AppliedjobsComponent,
    SearchjobComponent,
    ViewapplicantsComponent,
    ComnavbarComponent,
    ComdashboardComponent,
    EditEducationComponent,
    ActivejobsComponent,
    ClosedjobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
