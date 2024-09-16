import { Component } from '@angular/core';

@Component({
  selector: 'app-recruterhome',
  templateUrl: './recruterhome.component.html',
  styleUrls: ['./recruterhome.component.css']
})
export class RecruterhomeComponent {

  
  WhatToShow:number=0;

  jobid:number=0;
  changeCat(a:number){
    this.WhatToShow=a;
  }
}
