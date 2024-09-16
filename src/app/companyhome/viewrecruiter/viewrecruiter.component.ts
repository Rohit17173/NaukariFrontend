import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-viewrecruiter',
  templateUrl: './viewrecruiter.component.html',
  styleUrls: ['./viewrecruiter.component.css']
})
export class ViewrecruiterComponent {
  list:any;

  constructor(public Http:HttpClient, public app:AppComponent){
    let url=app.baseUrl+"company/getRecruter/"+this.app.id;
    console.log(url)
    Http.get(url).subscribe((data:any)=>{
      if (data==null) {
        window.alert("Something is Wrong")
      }else{
        console.log(data)
        this.list=data;
      }
    })
  }

  deleteCat(a:any){
    
  }

}
