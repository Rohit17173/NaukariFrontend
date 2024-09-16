import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-searchjob',
  templateUrl: './searchjob.component.html',
  styleUrls: ['./searchjob.component.css']
})
export class SearchjobComponent {
  constructor(public http:HttpClient,public app:AppComponent,public router:Router){}

  list:any;
  searchterm:string='';

  jobview: any[] = [];
  totalPages: number = 0;
  pagesArray: number[] = [];

  searchjob(){

    let url=this.app.baseUrl+"search/0/"+this.searchterm;
    console.log(url)
    this.http.get(url).subscribe((data:any)=>{
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
    this.http.get(url).subscribe((data:any)=>{
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
    // let url=this.app.baseUrl+"getjob/"+page;
    let url1=this.app.baseUrl+"search/"+page+"/"+this.searchterm;
    console.log(url1)
    this.http.get(url1).subscribe((data:any)=>{
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
}
