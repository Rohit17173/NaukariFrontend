import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ViewcompjobComponent } from '../viewcompjob/viewcompjob.component';

@Component({
  selector: 'app-viewapplicants',
  templateUrl: './viewapplicants.component.html',
  styleUrls: ['./viewapplicants.component.css']
})
export class ViewapplicantsComponent {

  list:any=[];
  constructor(public Http:HttpClient, public app:AppComponent){
    let url=app.baseUrl+"recruter/getJobApplications/"+app.jobid;

    Http.get(url).subscribe((data:any)=>{
      this.list=data;
      console.log(data)
    })
  }

}
