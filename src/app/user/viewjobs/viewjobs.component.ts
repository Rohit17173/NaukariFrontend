import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-viewjobs',
  templateUrl: './viewjobs.component.html',
  styleUrls: ['./viewjobs.component.css']
})
export class ViewjobsComponent {

  list:any;

  jobview: any[] = [];
  totalPages: number = 0;
  pagesArray: number[] = [];

  constructor(public Http:HttpClient, public app:AppComponent){
    let url=app.baseUrl+"getjob/0";
    console.log(url)
    Http.get(url).subscribe((data:any)=>{
      if (data==null) {
        window.alert("Something is Wrong")
      }else{
        console.log(data)
        
          this.jobview = data.jobview;
          this.totalPages = data.totalPages;
          this.pagesArray = Array(this.totalPages).fill(0).map((x, i) => i + 1);
        this.list=data;
      }
    })
  }

  
applyjob(jid:number){
  console.log(jid);
  let url=this.app.baseUrl+"user/applyJob/"+jid+"/"+this.app.id;
  this.Http.get(url).subscribe((data:any)=>{
    if (data==null) {
      window.alert("something is wrong")
    } 
     if(data==0){
      window.alert("cannot apply for job")
    }
    if(data==2){
      window.alert("Already Applied")
    }
    if(data==1){
      window.alert("Applied")
    }
  })
}
  

  goToPage(page: number): void {
    // this.getJobs(page);
    console.log(page)
    let url=this.app.baseUrl+"getjob/"+page;
    console.log(url)
    this.Http.get(url).subscribe((data:any)=>{
      if (data==null) {
        window.alert("Something is Wrong")
      }else{
        this.jobview= [];
 
        this.pagesArray = [];
        this.list=[];
        console.log(data)
        
          this.jobview = data.jobview;
          this.totalPages = data.totalPages;
          this.pagesArray = Array(this.totalPages).fill(0).map((x, i) => i + 1);
        this.list=data;
      }
    })
  }
  deleteCat(a:any){
    
  }

}
