import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { RecruterhomeComponent } from '../recruterhome.component';

@Component({
  selector: 'app-viewcompjob',
  templateUrl: './viewcompjob.component.html',
  styleUrls: ['./viewcompjob.component.css']
})
export class ViewcompjobComponent {
  list:any;

  constructor(public Http:HttpClient, public app:AppComponent,public router:Router,public rec:RecruterhomeComponent){
    let url=app.baseUrl+"recruter/viewjob/"+app.id;
    Http.get(url).subscribe((data:any)=>{
      this.list=data
    })
  }

  // Jobid:number=0;
  applicants(id:number){
    this.app.jobid=id;
    // this.router.navigate(['/recruter/appliedjobs/',this.app.jobid]);
  }

  changeCat(n:number){
  this.rec.WhatToShow=n;
}
  // applicants(id:number){}

  closePosition(id:number){
    let url=this.app.baseUrl+"recruter/closePosition/"+id;
    this.Http.get(url).subscribe((data:any)=>{
      if (data==0) {
        window.alert("something is wrong")
      } else {
        window.alert("closed Position")
      }
    })
  }

}
