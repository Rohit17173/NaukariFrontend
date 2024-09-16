import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-addrecruter',
  templateUrl: './addrecruter.component.html',
  styleUrls: ['./addrecruter.component.css']
})
export class AddrecruterComponent {
  constructor(public http:HttpClient,public app:AppComponent,public router:Router){}
  name!:string;
  username!:string;
  password:string='';
  age!:number;
  add(){
    let url=this.app.baseUrl+"company/addrecruiter"
    let user={
      age:this.age,
      name:this.name,
      email:this.username,
      password:this.password,
      companyid:this.app.id
    }
    console.log(url)
    this.http.post(url,user).subscribe((data:any)=>{
      console.log(data)
      if (data==null) {
        window.alert('Something is wrong');
      }
       if(data==1){
        window.alert("enter username");
      }
      if(data==2){
         window.alert("Enter password");
      }
       if(data==4){
        window.alert("successfully registerd")
      }
       if(data==3){
        window.alert("username already exist try new one")
      }
    })
  }
}
