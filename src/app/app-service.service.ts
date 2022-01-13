import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherModel } from './model/weather.model';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpClient : HttpClient) { }

  getWeather(city : string) {
    return this.httpClient.get(environment.weatherGetApi,{
      params : {
        q : city,
        appid : environment.appid
      }
    }).pipe(
    
      tap(r => console.log(r))
    )
  }
}
