import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    userName = 'Ramkumar Raja';
showHomeDropdown = false;

// showSidebar = false;

  toggleHomeDropdown() {
    this.showHomeDropdown = !this.showHomeDropdown;
  }

  //  toggleSidebar() {
  //   this.showSidebar = !this.showSidebar;
  // }
}
