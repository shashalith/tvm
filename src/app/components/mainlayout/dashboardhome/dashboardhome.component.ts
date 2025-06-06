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
  showAnnouncement = false;

  toggleHolidays() {
    this.showHolidays = !this.showHolidays;
    if (this.showHolidays) {
      this.showWorkhours = false;
      this.showwishes = false;
      this.showHiring= false;
      this.showAnnouncement= false; 
      this.showworkhistory = false;     
    }
  }

  toggleWorkhours() {
    this.showWorkhours = !this.showWorkhours;
    if (this.showWorkhours) {
      this.showHolidays = false;
      this.showworkhistory = false;
      this.showwishes = false;
      this.showHiring= false;
      this.showAnnouncement= false;
    }
  }
toggleHiring() {
  this.showHiring = !this.showHiring;
  if (this.showHiring) {
    this.showHolidays = false;
    this.showWorkhours = false;
    this.showworkhistory = false;
    this.showwishes = false;
    this.showAnnouncement= false;
  }
}

toggleWorkHistory(){
  this.showworkhistory = !this.showworkhistory;
    if (this.showworkhistory) {
      this.showHolidays = false;
      this.showWorkhours = false;
      this.showHiring = false;
      this.showwishes = false;
      this.showAnnouncement= false;
    }
}

toggleWishes(){
  this.showwishes = !this.showwishes;
    if (this.showwishes) {
      this.showHolidays = false;
      this.showWorkhours = false;
      this.showHiring = false;
      this.showworkhistory = false;
      this.showAnnouncement= false;
    }
}
toggleAnnouncement(){
  this.showAnnouncement = !this.showAnnouncement;
    if (this.showAnnouncement) {
      this.showHolidays = false;
      this.showWorkhours = false;
      this.showworkhistory = false;
      this.showHiring = false;
       this.showwishes = false;
    }
}
}
