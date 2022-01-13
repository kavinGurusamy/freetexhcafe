import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppServiceService } from '../app-service.service';

import {WeatherModel} from '../model/weather.model'

@Component({
  selector: 'app-get-weather-report',
  templateUrl: './get-weather-report.component.html',
  styleUrls: ['./get-weather-report.component.scss']
})
export class GetWeatherReportComponent implements OnInit {

  weatherControl = new FormControl('')

  city = [{
    name : 'Perundurai'
  },
  {
    name : 'COIMBATORE'
  },
  {
    name : 'Chennai'
  },
  {
    name : 'New Delhi'
  },
  {
    name : 'Goa'
  },
  {
    name : 'Bangalore'
  }

]

weatherData : any

error : any


  constructor(private appService : AppServiceService) { }

  ngOnInit(): void {
  }

  onChange(city){
    console.log(city);

     this.appService.getWeather(city).subscribe(
        {
          next : (res : any) => {
            if(res.cod == 200)
             this.weatherData = res
            
          },
          error : (err) => {

            this.error = 'No data has been found'

          }
        }
     
     )
    
  }

  

}
