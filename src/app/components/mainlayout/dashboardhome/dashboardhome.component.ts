import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboardhome',
  templateUrl: './dashboardhome.component.html',
  styleUrls: ['./dashboardhome.component.css']
})
export class DashboardhomeComponent {
   userName = 'Ramkumar Raja';

  showHolidays = false;
  showWorkhours = false;
  showHiring = false;
  showworkhistory =false;
  showwishes = false;

  toggleHolidays() {
    this.showHolidays = !this.showHolidays;
    if (this.showHolidays) {
      this.showWorkhours = false;
      this.showWorkhours = false;
      this.showwishes = false;
      this.showHiring= false;
    }
  }

  toggleWorkhours() {
    this.showWorkhours = !this.showWorkhours;
    if (this.showWorkhours) {
      this.showHolidays = false;
      this.showwishes = false;
      this.showHiring= false;
    }
  }
toggleHiring() {
  this.showHiring = !this.showHiring;
  if (this.showHiring) {
    this.showHolidays = false;
    this.showWorkhours = false;
    this.showwishes = false;
  }
}

toggleWorkHistory(){
  this.showworkhistory = !this.showworkhistory;
    if (this.showworkhistory) {
      this.showHolidays = false;
      this.showWorkhours = false;
      this.showHiring = false;
      this.showwishes = false;
    }
}

toggleWishes(){
  this.showwishes = !this.showwishes;
    if (this.showwishes) {
      this.showHolidays = false;
      this.showWorkhours = false;
      this.showHiring = false;
    }
}
}
