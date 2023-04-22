import { Component } from '@angular/core';
import { ServiceDemoService } from 'src/app/service-demo.service';
@Component({
  selector: 'app-pushpa',
  templateUrl: './pushpa.component.html',
  styleUrls: ['./pushpa.component.css']
})
export class PushpaComponent {
  apiData:any;

  constructor(private getData:ServiceDemoService){
    getData.getPushpa().subscribe(x=>{
      console.log(x)
      this.apiData = x
    })
  }
}
