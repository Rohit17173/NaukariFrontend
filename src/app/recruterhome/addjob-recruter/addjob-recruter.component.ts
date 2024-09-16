import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-addjob-recruter',
  templateUrl: './addjob-recruter.component.html',
  styleUrls: ['./addjob-recruter.component.css']
})
export class AddjobRecruterComponent {
  constructor(public http:HttpClient,public app:AppComponent,public router:Router){}
  title!:string;
  description!:string;
  location!:string;
  minsalary!:number;
  maxsalary!:number;
  minexp!:number;
  maxexp!:number;

  addjob(){
    let url=this.app.baseUrl+"recruter/addjob"
    let job={
      title:this.title,
      description:this.description,
      location:this.location,
      minsalary:this.minsalary,
      maxsalary:this.maxsalary,
      rid:this.app.id
    }

    this.http.post(url,job).subscribe((data:any)=>{
      console.log(data);
      if (data==null ) {
        window.alert("something is wrong")
      } else if(data==0){
        window.alert("unable to add job")
      }
      else {
        window.alert("Job added")
        this.title='';
        this.description='';
        this.location='';
        this.minsalary=0;
        this.maxsalary=0;
        
      }
    })
  }

}
