import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
 
})
export class HeaderComponent {

  constructor(private router:Router){}

  ngOnInit():void{
  
  }
  
 public formData: any = {};
 registerData: any = {};
  
  
  getData(data: NgForm) {
    
    this.formData = data
    alert("Success")
    

  }
  
  login(data1 :any) {
    
    console.log(this.registerData)
    this.registerData = data1
  if (this.formData.Username == this.registerData.Username && this.formData.Password == this.registerData.Password) {
    alert("Login Successfull")
    this.router.navigateByUrl('home')
    }
     

 }
  
}
