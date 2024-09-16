import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'naukari';
  baseUrl="http://43.204.148.75:8080/nau/"
  id:number=0;
  jobid:number=0;
  whatTOShow:number=0;
}
