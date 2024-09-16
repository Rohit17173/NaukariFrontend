import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent {
  profile: any;
  education: any;
  experience: any;
  user: any;
  pid!: number;
  constructor(public http: HttpClient, public app: AppComponent) {
    let url3 = app.baseUrl + 'user/getUser/' + app.id;
    http.get(url3).subscribe((data: any) => {
      console.log(data);
      this.user = data;
    });

    let url = app.baseUrl + 'user/getprofile/' + app.id;
    http.get(url).subscribe((data: any) => {
      this.profile = data;
      console.log(this.profile);
    });

    let url1 = app.baseUrl + 'user/getExperience/' + app.id;
    this.http.get(url1).subscribe((data: any) => {
      this.experience = data;
    });

    let url2 = app.baseUrl + 'user/getEducation/' + app.id;
    this.http.get(url2).subscribe((data: any) => {
      this.education = data;
      console.log(this.education);
    });
  }
  college!: string;
  degree!: string;
  startdate!: string;
  enddate!: string;
  marks!: string;
  field!: string;
  location!: string;
  addClg() {
    let collegeobj = {
      userid: this.app.id,
      college: this.college,
      degree: this.degree,
      startDate: this.startdate,
      endtDate: this.enddate,
      totalmarks: this.marks,
      field: this.field,
      location: this.location,
    };

    let url = this.app.baseUrl + 'user/updateCollege';

    this.http.post(url, collegeobj).subscribe((data: any) => {
      console.log(data);
      if (data == null) {
        window.alert('something is wrong');
      } else {
        this.education = [];
        let url2 = this.app.baseUrl+'user/getEducation/'+this.app.id;
        this.http.get(url2).subscribe((data: any) => {
          this.education = data;
          console.log(this.education);
        });
      }
    });
    this.whatTOShow=0;
  }

  companyname!: string;
  Position!: string;
  joiningdate!: string;
  leavingdate!: string;
  addCompany() {
    let company = {
      userid: this.app.id,
      companyname: this.companyname,
      position: this.Position,
      joiningDate: this.joiningdate,
      leavingDate: this.leavingdate,
    };
    let url = this.app.baseUrl + 'user/updateCompany';

    this.http.post(url, company).subscribe((data: any) => {
      console.log(data);
      if (data == null) {
        window.alert('something is wrong');
      } else {
        this.experience = [];
        let url2 = this.app.baseUrl+'user/getExperience/'+this.app.id;
        this.http.get(url2).subscribe((data: any) => {
          this.experience = data;
          console.log(this.education);
        });
      }
    });
    this.whatTOShow=0;
  }

  obj:any;

  editCollege(college:any){
    
    this.obj=college;
    // console.log(this.obj)

  }

  updateClg(){
    console.log(this.obj)
    let url = this.app.baseUrl + 'user/updateCollege';
    
    this.http.post(url, this.obj).subscribe((data: any) => {
      console.log(data);
      if (data == null) {
        window.alert('something is wrong');
      } else {
        this.education = [];
        let url2 = this.app.baseUrl+'user/getEducation/'+this.app.id;
        this.http.get(url2).subscribe((data: any) => {
          this.education = data;
          console.log(this.education);
        });
      }
    });
    this.whatTOShow=0;
  }

  compObj:any;
  editCompany(object:any){
    this.compObj=object;
    this.whatTOShow=4;
  }

  updateCompany(){
    console.log(this.obj)
    let url = this.app.baseUrl + 'user/updateCompany';
    
    this.http.post(url, this.compObj).subscribe((data: any) => {
      console.log(data);
      if (data == null) {
        window.alert('something is wrong');
      } else {
        this.experience = [];
        let url2 = this.app.baseUrl+'user/getExperience/'+this.app.id;
        this.http.get(url2).subscribe((data: any) => {
          this.experience = data;
          console.log(this.experience);
        });
      }
    });
    this.whatTOShow=0;
  }

  deleteCompExp(id:number){
    console.log(id)
    let url = this.app.baseUrl + 'user/deleteExp/'+id;
    this.http.delete(url, this.compObj).subscribe((data: any) => {
      console.log(data);
      if (data == null) {
        window.alert('something is wrong');
      } else {
        this.experience = [];
        let url2 = this.app.baseUrl+'user/getExperience/'+this.app.id;
        this.http.get(url2).subscribe((data: any) => {
          this.experience = data;
          console.log(this.experience);
        });
      }
    });
  }

  deeteCollege(id:number){
    console.log(id)
    let url = this.app.baseUrl + 'user/deleteClg/'+id;
    this.http.delete(url, this.compObj).subscribe((data: any) => {
      console.log(data);
      if (data == null) {
        window.alert('something is wrong');
      } else {
        this.education = [];
        let url2 = this.app.baseUrl+'user/getExperience/'+this.app.id;
        this.http.get(url2).subscribe((data: any) => {
          this.education = data;
          console.log(this.education);
        });
      }
    });

  }

  mobile!:number;
  profPosition!:number;
  Skills!:string;
  expectedCtc!:string;
  currentCtc!:string;
  totalExperience!:string;
  profilelocation!:string;
  headline!:string;

  addProfile(){
    let profileObj={
      userid:this.app.id,
      mobile:this.mobile,
      position:this.profPosition,
      headline:this.headline,
      skills:this.Skills,
      location:this.profilelocation,
      expectedCtc:this.expectedCtc,
      currntCtc:this.currentCtc,
      toalexp:this.totalExperience
    };

    let url = this.app.baseUrl + 'user/updateprofile';

    this.http.post(url,profileObj).subscribe((data:any)=>{
      if (data!=1) {
        window.alert("something is wrong")
      } else {
        let url1 = this.app.baseUrl + 'user/getprofile/' + this.app.id;
        this.http.get(url1).subscribe((data: any) => {
        this.profile = data;
        console.log(this.profile);
    });
      }
    })
  this.whatTOShow= 0;
  }

  updateProfile(){
    let url = this.app.baseUrl + 'user/updateprofile';

    this.http.post(url,this.profile).subscribe((data:any)=>{
      if (data!=1) {
        window.alert("something is wrong")
      } else {
        let url1 = this.app.baseUrl + 'user/getprofile/' + this.app.id;
        this.http.get(url1).subscribe((data: any) => {
        this.profile = data;
        console.log(this.profile);
    });
      }
    })
  this.whatTOShow= 0;
  }

  whatTOShow: number = 0;
  changeView(n: number) {
    this.whatTOShow = n;
  }
}
