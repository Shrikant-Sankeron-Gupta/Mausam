import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule, MatDatepickerIntl} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-astronomy',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatFormFieldModule, FormsModule, CommonModule, MatDatepickerModule, MatInputModule, MatButtonModule,
    MatDatepickerModule, MatNativeDateModule
  ],
  templateUrl: './astronomy.component.html',
  styleUrl: './astronomy.component.css'
})
export class AstronomyComponent {
  city: string = '';
  astronomyData: any;
  date: string = '';
  showError: boolean = false;

  constructor(private weatherService: WeatherService) { }

  getAstronomyData() {
    this.weatherService.getAstronomyDetails(this.city, this.date).subscribe({
      next: (data) => {
        if(data && data.astronomy) {
          this.astronomyData = data.astronomy;
        }
        else {
          this.astronomyData = null;
          this.showError = true;
        }
      },
      error: (error) => {
        this.astronomyData = null;
        this.showError = true;
      }
    });
  }

  // Method to prevent form submission on Enter key until both fields are filled and valid
  onEnterKey(event: Event) {
    const keyboardEvent = event as KeyboardEvent;
    if (!this.city.trim() || !this.date) {
      keyboardEvent.preventDefault();  // Prevent form submission if fields are invalid
    } else {
      this.getAstronomyData();  // If fields are valid, trigger the forecast
    }
  }
}
