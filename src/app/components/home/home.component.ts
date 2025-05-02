import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showLogin = true; // This controls whether the Login form is shown

  toggleForm(isLogin: boolean): void {
    this.showLogin = isLogin; // If true, show Login, otherwise show Signup
  }
}
