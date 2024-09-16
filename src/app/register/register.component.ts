import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public http:HttpClient,public app:AppComponent,public router:Router){}
  name!:string;
  age!:number;
  username!:string;
  password!:string;
  register(){
    let url=this.app.baseUrl+"register"
    let user={
      age:this.age,
      name:this.name,
      email:this.username,
      password:this.password
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
        this.router.navigate(['/login']);
      }
       if(data==3){
        window.alert("username already exist try new one")
      }
    })
  }
}
