import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
showHomeDropdown = false;

// showSidebar = false;

  toggleHomeDropdown() {
    this.showHomeDropdown = !this.showHomeDropdown;
  }

  //  toggleSidebar() {
  //   this.showSidebar = !this.showSidebar;
  // }
}
