import { Component, Input  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
 
  @Input() item = 'formData';
  constructor(private router:Router){
      
    }
 

  ngOnInit():void{}
  
  
  formData: any = {}

  registerData: any = {};

  // setdata(data2:HeaderComponent){
  //   this.formData = data2.dataToLogin()
  //   console.log(this.formData)
  //   return this.formData;
  // }
  
  login(data1 :any) {
    
     console.log(this.registerData)
     this.formData = data1
   if (this.formData.Username == this.registerData.Username) {
     alert("Login Successfull")
     this.router.navigateByUrl('home')
     }
      

  }
}
