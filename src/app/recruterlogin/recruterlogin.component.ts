import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruterlogin',
  templateUrl: './recruterlogin.component.html',
  styleUrls: ['./recruterlogin.component.css']
})
export class RecruterloginComponent {
  constructor(public http:HttpClient,public app:AppComponent,public router:Router){}
  username!:string;
  password!:string;
  login(){
    let url=this.app.baseUrl+"recruter/login"
    let obj=[this.username,this.password];

    console.log(obj);
    this.http.post(url,obj).subscribe((response:any)=>{
      // console.log(response.successfull);
      if (response==null) {
        window.alert('Something is wrong');
      }else{
        if (response.successfull==false) {
          window.alert(response.error);
        }else{
        this.app.id=response.id;
        this.app.whatTOShow=1;
        this.router.navigate(['/recruter/home']);
      }
      }

    })
  }
  register(){}
}
