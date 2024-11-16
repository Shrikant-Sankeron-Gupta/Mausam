import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './components/forecast/forecast.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar'
import { AboutComponent } from './components/about/about.component';
import { AstronomyComponent } from './components/astronomy/astronomy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    WeatherComponent,
    ForecastComponent,
    AboutComponent,
    AstronomyComponent,
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
  @ViewChild('sidenav') sidenav!: MatSidenav;

  selectedOption: string = '';

  // Method to change the selected option
  selectOption(option: string) {
    this.selectedOption = option;
    this.sidenav.close();
  }
}
