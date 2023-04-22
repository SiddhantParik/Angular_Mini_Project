import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private router:Router){}

  ngOnInit():void{
  
  }
  
 public formData: any = {};
  
  login : any;
  getData(data: NgForm) {
    
    this.formData = data
    alert("Success")
    this.router.navigateByUrl('home')

  }
  dataToLogin(){
    return this.formData
  }
  // @Output() SendDataEvent = new EventEmitter<any>()
  getFormData(){
    return this.formData;
  }

  RandomUser(){
    this.router.navigateByUrl('RandomUser')
  }
  Bored(){
    this.router.navigateByUrl('Bored')
  }
  BitCoin(){
    this.router.navigateByUrl('BitCoin')
  }

  Ipinfo(){
    this.router.navigateByUrl('Ipinfo')
  }

  Alldata(){
    this.router.navigateByUrl('alldata')
  }

  Catfact(){
    this.router.navigateByUrl('catfact')
  }

  Joke(){
    this.router.navigateByUrl('joke')
  }
  pushpa(){
    this.router.navigateByUrl('pushpa')
  }
}
