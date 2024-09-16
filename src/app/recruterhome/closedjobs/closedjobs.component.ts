import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-closedjobs',
  templateUrl: './closedjobs.component.html',
  styleUrls: ['./closedjobs.component.css']
})
export class ClosedjobsComponent {

  closedJob:any;

  constructor(public Http:HttpClient, public app:AppComponent){
    let url=app.baseUrl+"recruter/getClosedJob/"+app.id;
    Http.get(url).subscribe((data:any)=>{
      this.closedJob=data
    })
  }

}
