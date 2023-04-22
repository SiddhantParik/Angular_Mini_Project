import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceDemoService } from 'src/app/service-demo.service';


@Component({
  selector: 'app-zippo',
  templateUrl: './zippo.component.html',
  styleUrls: ['./zippo.component.css']
})
export class ZippoComponent {
  apiData:any;

  constructor(private getData:ServiceDemoService){
    getData.getFactData().subscribe(x=>{
      console.log(x)
      this.apiData = x
    })
  }

}
