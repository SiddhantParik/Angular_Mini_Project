import { Component } from '@angular/core';
import { ServiceDemoService } from 'src/app/service-demo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})

export class RandomUserComponent {
  apiData : any;
  temp : any;
 
  constructor(private getData: ServiceDemoService){

    this.temp = () => getData.getRandomUserData().subscribe( x => {
      console.log(x);
      this.apiData = x;
    });
    this.temp();
  }

  nextUser(){
    this.temp();
  }

  
}
