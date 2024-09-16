import { Component } from '@angular/core';

@Component({
  selector: 'app-companyhome',
  templateUrl: './companyhome.component.html',
  styleUrls: ['./companyhome.component.css']
})
export class CompanyhomeComponent {

  WhatToShow:number=0;

  changeCat(a:number){
    this.WhatToShow=a;
  }

}
