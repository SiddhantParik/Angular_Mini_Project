import { Component } from '@angular/core';
import { ServiceDemoService } from 'src/app/service-demo.service';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent {

  userData:any=[]

constructor(private uData:ServiceDemoService){
this.uData.getUserData().subscribe(data=>{
  console.log(data);
  this.userData=data
})

}


}
