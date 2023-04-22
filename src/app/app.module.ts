import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component'
import { RandomUserComponent } from './Components/random-user/random-user.component';
import { ZippoComponent } from './Components/zippo/zippo.component';
import { BitcoinComponent } from './Components/bitcoin/bitcoin.component';
import { IpInfoComponent } from './Components/Gender/ip-info.component';
import { AllDataComponent } from './Components/all-data/all-data.component';
import { CatFactComponent } from './Components/cat-fact/cat-fact.component';
import { JokeComponent } from './Components/joke/joke.component';
import { PushpaComponent } from './Components/pushpa/pushpa.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    RandomUserComponent,
    ZippoComponent,
    BitcoinComponent,
    IpInfoComponent,
    AllDataComponent,
    CatFactComponent,
    JokeComponent,
    PushpaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
