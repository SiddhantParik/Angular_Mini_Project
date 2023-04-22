import { Component } from '@angular/core';
import { ServiceDemoService } from 'src/app/service-demo.service';
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {

  apiData :any;

  constructor(private getData:ServiceDemoService){
    getData.getJokeData().subscribe(x=> {
      this.apiData = x;
      console.log(this.apiData[0]);
    })
  }


}
