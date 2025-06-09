import { Component } from '@angular/core';

@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.css']
})
export class MainlayoutComponent {
  showHomeDropdown = false;
  showWFHDropdown = false;
  showLeaveDropdown = false;
  showTimesheetDropdown = false;
  showTaskDropdown = false;
  showOKRDropdown = false;
  showOffboardingDropdown = false;
  showOnboardingDropdown = false;
  showAddJobDropdown = false;
  showSettings = false;
  showSearch = false;

  toggleHomeDropdown() {
    this.showHomeDropdown = !this.showHomeDropdown;
  }

  toggleWFHDropdown() {
    this.showWFHDropdown = !this.showWFHDropdown;
  }

  toggleLeaveDropdown() {
    this.showLeaveDropdown = !this.showLeaveDropdown;
  }

  toggleTimesheetDropdown() {
    this.showTimesheetDropdown = !this.showTimesheetDropdown;
  }

  toggleTaskDropdown() {
    this.showTaskDropdown = !this.showTaskDropdown;
  }

  toggleOKRDropdown() {
    this.showOKRDropdown = !this.showOKRDropdown;
  }

  toggleOffboardingDropdown() {
    this.showOffboardingDropdown = !this.showOffboardingDropdown;
  }

  toggleOnboardingDropdown() {
    this.showOnboardingDropdown = !this.showOnboardingDropdown; // ✅ Correct variable
  }
  
  toggleAddJobDropdown() {
    this.showAddJobDropdown = !this.showAddJobDropdown;
  }

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
}
