import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ServiceDemoService } from './service-demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project1';

  apidata1:any;
constructor(private getData1:ServiceDemoService){
    getData1.getRandomUserData().subscribe(x => {
      console.log(x)
      this.apidata1 = x
    })
  }


 

}
