import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://api.weatherapi.com/v1';
  private apiKey = 'c1e2ab6c5e6d43cc913144048241511';

  constructor(private http: HttpClient) { }

  public getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}/current.json?key=${this.apiKey}&q=${city}`;
    return this.http.get(url);
  }

  public getWeatherForecast(city: string, days: number): Observable<any> {
    const url = `${this.apiUrl}/forecast.json?key=${this.apiKey}&q=${city}&days=${days}`;
    return this.http.get(url);
  }
}
