import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ServiceDemoService } from 'src/app/service-demo.service';

@Component({
  selector: 'app-cat-fact',
  templateUrl: './cat-fact.component.html',
  styleUrls: ['./cat-fact.component.css']
})

export class CatFactComponent {
  title = 'App';
  apiData:any;
  temp:any;

  constructor(private getData:ServiceDemoService){
  this.temp = () => getData.getFunc().subscribe(x=>{
      console.log(x)
      this.apiData=x
    })
    this.temp();
  }

  nextCatFact(){
    this.temp();
  }
}
