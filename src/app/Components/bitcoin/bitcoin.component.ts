import { Component } from '@angular/core';
import { ServiceDemoService } from 'src/app/service-demo.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent {
  data:any;
  constructor(private api:ServiceDemoService){
api.getBitcoin().subscribe(sub=>{
  console.log(sub);
  this.data=sub
})
}
}
