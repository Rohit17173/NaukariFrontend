import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-activejobs',
  templateUrl: './activejobs.component.html',
  styleUrls: ['./activejobs.component.css']
})
export class ActivejobsComponent {

  OpenJob:any;

  constructor(public Http:HttpClient, public app:AppComponent){
    let url=app.baseUrl+"recruter/getActiveJob/"+app.id;
    Http.get(url).subscribe((data:any)=>{
      this.OpenJob=data
    })
  }
}
