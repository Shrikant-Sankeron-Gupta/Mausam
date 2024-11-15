import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [
    FormsModule, 
    CommonModule,
    ForecastComponent,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css'
})
export class ForecastComponent {
  city: string = '';
  noOfDays: number = 1;
  forecastData: any;
  showError: boolean = false;

  constructor(private weatherService: WeatherService) {}

  getForecast() {
    this.weatherService.getWeatherForecast(this.city, this.noOfDays).subscribe({
      next: (data) => {
        if(data && data.forecast) {
          this.forecastData = data;
        }
        else {
          this.forecastData = null;
          this.showError = true;
        }
      },
      error: (error) => {
        this.forecastData = null;
        this.showError = true;
      }
    });
  }

  // Method to prevent form submission on Enter key until both fields are filled and valid
  onEnterKey(event: Event) {
    const keyboardEvent = event as KeyboardEvent;
    if (!this.city.trim() || this.noOfDays <= 0) {
      keyboardEvent.preventDefault();  // Prevent form submission if fields are invalid
    } else {
      this.getForecast();  // If fields are valid, trigger the forecast
    }
  }

}
