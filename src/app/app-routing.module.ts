import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { RegistercompanyComponent } from './registercompany/registercompany.component';
import { CompanyloginComponent } from './companylogin/companylogin.component';
import { CompanyhomeComponent } from './companyhome/companyhome.component';
import { RecruterloginComponent } from './recruterlogin/recruterlogin.component';
import { RecruterhomeComponent } from './recruterhome/recruterhome.component';
import { ViewjobsComponent } from './user/viewjobs/viewjobs.component';
import { ViewcompjobComponent } from './recruterhome/viewcompjob/viewcompjob.component';
import { AppliedjobsComponent } from './user/appliedjobs/appliedjobs.component';
import { MyProfileComponent } from './user/my-profile/my-profile.component';
import { SearchjobComponent } from './user/searchjob/searchjob.component';
import { ViewapplicantsComponent } from './recruterhome/viewapplicants/viewapplicants.component';


const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"login",component:LoginComponent
  },
  
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"home",component:UserComponent
  },
  {
    path:"user/viewjob",component:ViewjobsComponent
  },
  {
    path:"user/appliedjob",component:AppliedjobsComponent
  },
  {
    path:"user/profile",component:MyProfileComponent
  },
  {
    path:"user/searchjob",component:SearchjobComponent
  },
  {
    path:"company",component:RegistercompanyComponent
  },
  {
    path:"company/login",component:CompanyloginComponent
  },
  {
    path:"company/home",component:CompanyhomeComponent
  },
  {
    path:"recruter/login",component:RecruterloginComponent
  },
  {
    path:"recruter/home",component:RecruterhomeComponent
  },
  {
    path:"recruter/jobs",component:ViewcompjobComponent
  },
  {
    path:"recruter/appliedjobs/:id",component:ViewapplicantsComponent
  },
  {
    path:"**",component:NotfoundcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
