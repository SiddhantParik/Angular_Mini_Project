import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';

import { HomeComponent } from './Components/home/home.component';
import { RandomUserComponent } from './Components/random-user/random-user.component';
import { ZippoComponent } from './Components/zippo/zippo.component';
import { BitcoinComponent } from './Components/bitcoin/bitcoin.component';

import { IpInfoComponent } from './Components/Gender/ip-info.component';

import { AllDataComponent } from './Components/all-data/all-data.component';
import { CatFactComponent } from './Components/cat-fact/cat-fact.component';

import { JokeComponent } from './Components/joke/joke.component';

import { PushpaComponent } from './Components/pushpa/pushpa.component';


const routes: Routes = [

 {
   path:'login', 
   component:LoginComponent
},
{
  path:'', 
  component:HeaderComponent
},
{
  path:'home', 
  component:HomeComponent
},
{
  path:'RandomUser', 
  component:RandomUserComponent
},
{
  path:'Bored', 
  component:ZippoComponent
},
{
  path:'BitCoin', 
  component:BitcoinComponent
},
{
  path:'Ipinfo', 
  component:IpInfoComponent
},
{
  path:'alldata', 
  component:AllDataComponent
},
{
  path:'catfact', 
  component:CatFactComponent
},
{
  path:'joke', 
  component:JokeComponent
},
{
  path:'pushpa', 
  component:PushpaComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
