import { Component } from '@angular/core';

@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.css']
})
export class MainlayoutComponent {

  activeTab: 'notifications' | 'announcements' = 'notifications';

 showHomeDropdown = false;

  toggleHomeDropdown() {
    this.showHomeDropdown = !this.showHomeDropdown;
  }
  showSearch = false;
showSettings = false;

toggleSearch() {
  this.showSearch = !this.showSearch;
  this.showSettings = false;
}

toggleSettings() {
  this.showSettings = !this.showSettings;
  this.showSearch = false;
}

}
