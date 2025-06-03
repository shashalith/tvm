import { Component } from '@angular/core';

@Component({
  selector: 'app-workfromhome',
  templateUrl: './workfromhome.component.html',
  styleUrls: ['./workfromhome.component.css']
})
export class WorkfromhomeComponent {
showHomeDropdown = false;

  toggleHomeDropdown() {
    this.showHomeDropdown = !this.showHomeDropdown;
  }
}
