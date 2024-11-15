import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    FormsModule, 
    CommonModule,
    WeatherComponent,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;
  showError: boolean = false;

  constructor(private weatherService: WeatherService) {}

  fetchWeather() {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        if (data && data.current) {
          this.weatherData = data;
          this.showError = false;  // Hide error if data is found
        } else {
          this.weatherData = null;
          this.showError = true;  // Show error if no data is found
        }
      },
      error: (error) => {
        this.weatherData = null;
        this.showError = true;
      },
      complete: () => {
        console.log("Data fetched succeffuly!");
      }
    });
      
  }

}
