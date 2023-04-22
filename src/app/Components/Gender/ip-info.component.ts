import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceDemoService } from 'src/app/service-demo.service';

@Component({
  selector: 'app-ip-info',
  templateUrl: './ip-info.component.html',
  styleUrls: ['./ip-info.component.css']
})
export class IpInfoComponent {
  ipData:any=[]

  constructor(private getIp:ServiceDemoService){
    

    this.getIp.getIpData().subscribe(sub=>{
      console.log(sub);
      this.ipData=sub;
    })
  }

}
