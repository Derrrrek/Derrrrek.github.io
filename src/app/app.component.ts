import { Component } from '@angular/core';
import { StrompriserService } from './strompriser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'strompriser-app';
  strompriser: any;
  selectedDate: Date;

  constructor(private strompriserService: StrompriserService) {
    this.selectedDate = new Date(); // Set the initial date to today
    this.getStrompriser();
  }

  getStrompriser() {
    if (!this.selectedDate) return; // Do nothing if the date is not selected

    const year = this.selectedDate.getFullYear().toString();
    const month = (this.selectedDate.getMonth() + 1).toString().padStart(2, '0');
    const day = this.selectedDate.getDate().toString().padStart(2, '0');

    this.strompriserService.getStrompriser(year, month, day, 'NO1').subscribe(data => {
      this.strompriser = data;
    });
  }
}
