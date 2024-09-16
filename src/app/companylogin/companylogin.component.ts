import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companylogin',
  templateUrl: './companylogin.component.html',
  styleUrls: ['./companylogin.component.css']
})
export class CompanyloginComponent {

  constructor(public http:HttpClient,public app:AppComponent,public router:Router){}
  username!:string;
  password!:string;

  login(){
    let url=this.app.baseUrl+"company/login"
    let obj=[this.username,this.password];

    console.log(obj);
    this.http.post(url,obj).subscribe((response:any)=>{
      console.log(response);
      if (response==null) {
        window.alert('Something is wrong');
      }else{
        if (response.successfull==false) {
          window.alert(response.error);
        }else{
        this.app.id=response.id;
        this.app.whatTOShow=1;
        this.router.navigate(['company/home']);
        console.log(this.app.id)
      }
      }

    })
  }
  register(){}


}
