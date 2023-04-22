import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceDemoService {
  private urlRandomUser = "https://randomuser.me/api";
  constructor(private httpClient: HttpClient) { }

  getRandomUserData(){
    return this.httpClient.get(this.urlRandomUser);
  }

  private urlBoard ="https://www.boredapi.com/api/activity"
  

  getFactData(){
    return this.httpClient.get(this.urlBoard)
    
}

getBitcoin(){
  return this.httpClient.get('https://api.coindesk.com/v1/bpi/currentprice.json');
}


private urlIp='https://api.genderize.io?name=luc'


  getIpData(){
    return this.httpClient.get(this.urlIp);
  }


  getUserData(){
    let url1="https://localhost:44367/api/Department1";
  return this.httpClient.get(url1);
  }


  private urlCat="https://catfact.ninja/fact";
  
  getFunc(){
    return this.httpClient.get(this.urlCat)
  }


  private urlJoke ="https://sprintapp46303020.azurewebsites.net/api/Department1";

  

  getJokeData(){
    return this.httpClient.get(this.urlJoke);
  }


  private urlPushpa ="https://localhost:44367/WeatherForecast"
  

  getPushpa(){
    return this.httpClient.get(this.urlPushpa)
    
}
}
