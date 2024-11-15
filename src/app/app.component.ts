import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './components/forecast/forecast.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    WeatherComponent,
    ForecastComponent,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListItem,
    MatNavList,
    MatToolbarModule,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mausam-weather-monitor';

  selectedOption: string = '';

  // Method to change the selected option
  selectOption(option: string) {
    this.selectedOption = option;
  }
}
