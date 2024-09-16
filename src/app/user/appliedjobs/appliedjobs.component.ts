import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-appliedjobs',
  templateUrl: './appliedjobs.component.html',
  styleUrls: ['./appliedjobs.component.css']
})
export class AppliedjobsComponent {
  
  list:any;

  // jobview: any[] = [];
  // totalPages: number = 0;
  // pagesArray: number[] = [];

  constructor(public Http:HttpClient, public app:AppComponent){
    let url=app.baseUrl+"user/appliedJob/"+app.id;
    console.log(url)
    Http.get(url).subscribe((data:any)=>{
      if (data==null) {
        window.alert("Something is Wrong")
      }else{
        console.log(data)
        
          // this.jobview = data.jobview;
          // this.totalPages = data.totalPages;
          // this.pagesArray = Array(this.totalPages).fill(0).map((x, i) => i + 1);
        this.list=data;
      }
    })
  }

  goToPage(page: number): void {
    // this.getJobs(page);
    let url=this.app.baseUrl+"user/getjob/"+page;
    console.log(url)
    this.Http.get(url).subscribe((data:any)=>{
      if (data==null) {
        window.alert("Something is Wrong")
      }else{
        
        this.list=data;
      }
    })
  }

}
