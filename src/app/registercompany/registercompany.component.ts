import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registercompany',
  templateUrl: './registercompany.component.html',
  styleUrls: ['./registercompany.component.css']
})
export class RegistercompanyComponent {
  constructor(public http:HttpClient,public app:AppComponent,public router:Router){}
  name!:string;
  cname!:string;
  noemp!:number;
  email!:string;
  password!:string;
  contact!:string;
  city!:string;

  register(){
    let url=this.app.baseUrl+"company/register"
    let company={
      name:this.name,
      companyname:this.cname,
      email:this.email,
      password:this.password,
      contact:this.contact,
      noofemp:this.noemp,
      city:this.city
    }

    this.http.post(url,company).subscribe((data:any)=>{
      console.log(data)
      if (data==null) {
        window.alert('Something is wrong');
      }else if (data==1){
        window.alert("Register successful");
      }else if(data==3){
        window.alert("enter all fields")
      }else{
        window.alert("email already exist")
      }
       
    })
  }

}
