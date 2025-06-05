import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'; // ✅ Required for Swal.fire

@Component({
  selector: 'app-wishcard',
  templateUrl: './wishcard.component.html',
  styleUrls: ['./wishcard.component.css']
})
export class WishcardComponent implements OnInit {
  allWishes = [
    // WELCOME ON BOARD (10)
    { name: 'RAHUL', date: '14 May 25', role: 'Marketing', category: 'WELCOME ON BOARD', image: 'assets/images/hero1.jpg', showButton: false },
    { name: 'PRIYA', date: '20 Apr 25', role: 'Sales', category: 'WELCOME ON BOARD', image: 'assets/images/hero9.jpg', showButton: false },
    { name: 'ARJUN', date: '10 Mar 25', role: 'Engineering', category: 'WELCOME ON BOARD', image: 'assets/images/hero3.jpg', showButton: false },
    { name: 'SNEHA', date: '8 Jun 25', role: 'Support', category: 'WELCOME ON BOARD', image: 'assets/images/hero10.jpg', showButton: false },
    { name: 'VIKRAM', date: '5 May 25', role: 'Design', category: 'WELCOME ON BOARD', image: 'assets/images/hero5.jpg', showButton: false },
    { name: 'RADHA', date: '1 Feb 25', role: 'HR', category: 'WELCOME ON BOARD', image: 'assets/images/hero11.jpg', showButton: false },
    { name: 'KARTHIK', date: '7 Jun 25', role: 'Finance', category: 'WELCOME ON BOARD', image: 'assets/images/hero7.jpg', showButton: false },
    { name: 'MEENA', date: '12 Apr 25', role: 'Admin', category: 'WELCOME ON BOARD', image: 'assets/images/hero12.jpg', showButton: false },
    { name: 'RAVI', date: '3 Jun 25', role: 'QA', category: 'WELCOME ON BOARD', image: 'assets/images/hero9.jpg', showButton: false },
    { name: 'ANITA', date: '15 Jan 25', role: 'Legal', category: 'WELCOME ON BOARD', image: 'assets/images/hero13.jpg', showButton: false },

    // BIRTHDAY WISHES (15)
    { name: 'SRINIVASAN', date: '4 Jun', role: 'Tourism Dev', category: 'BIRTHDAY WISHES', image: 'assets/images/hero7.jpg', showButton: true },
    // ... (other birthday wishes)
    { name: 'POOJA', date: '4 Jun', role: 'PMO', category: 'BIRTHDAY WISHES', image: 'assets/images/hero11.jpg', showButton: true },

    // ANNIVERSARY WISHES (10)
    { name: 'KARUNAKARAN', date: '12 Yr | 4 Jan 13', role: 'Admin', category: 'ANNIVERSARY WISHES', image: 'assets/images/hero2.jpg', showButton: true },
    // ... (other anniversary wishes)
    { name: 'GEETHA', date: '4 Yr | 4 Jun 20', role: 'QA', category: 'ANNIVERSARY WISHES', image: 'assets/images/hero10.jpg', showButton: true }
  ];

  today = new Date();
  onboardingWishes: any[] = [];
  birthdayWishes: any[] = [];
  anniversaryWishes: any[] = [];

  onboardingIndex = 0;
  birthdayIndex = 0;
  anniversaryIndex = 0;

  ngOnInit() {
    this.filterWishes();
  }

  filterWishes() {
    const todayDay = this.today.getDate();
    const todayMonth = this.today.toLocaleString('default', { month: 'short' });

    this.onboardingWishes = this.allWishes
      .filter(p => p.category === 'WELCOME ON BOARD')
      .slice(0, 10);

    this.birthdayWishes = this.allWishes
      .filter(p => {
        if (p.category !== 'BIRTHDAY WISHES') return false;
        const parts = p.date.trim().split(' ');
        if (parts.length < 2) return false;
        const day = parseInt(parts[0]);
        const month = parts[1];
        return day === todayDay && month.toLowerCase() === todayMonth.toLowerCase();
      })
      .slice(0, 15);

    this.anniversaryWishes = this.allWishes
      .filter(p => {
        if (p.category !== 'ANNIVERSARY WISHES') return false;
        const match = p.date.match(/(\d{1,2}) (\w{3})/);
        if (!match) return false;
        const day = parseInt(match[1]);
        const month = match[2];
        return day === todayDay && month.toLowerCase() === todayMonth.toLowerCase();
      })
      .slice(0, 10);
  }

  sendWishes(name: string) {
    Swal.fire({
      title: 'Wishes Sent!',
      text: `You have sent wishes to ${name}.`, // ✅ FIXED: backticks for string interpolation
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    });
  }

  next(category: string) {
    switch (category) {
      case 'WELCOME ON BOARD':
        if (this.onboardingWishes.length > 0) {
          this.onboardingIndex = (this.onboardingIndex + 1) % this.onboardingWishes.length;
        }
        break;
      case 'BIRTHDAY WISHES':
        if (this.birthdayWishes.length > 0) {
          this.birthdayIndex = (this.birthdayIndex + 1) % this.birthdayWishes.length;
        }
        break;
      case 'ANNIVERSARY WISHES':
        if (this.anniversaryWishes.length > 0) {
          this.anniversaryIndex = (this.anniversaryIndex + 1) % this.anniversaryWishes.length;
        }
        break;
    }
  }

  previous(category: string) {
    switch (category) {
      case 'WELCOME ON BOARD':
        if (this.onboardingWishes.length > 0) {
          this.onboardingIndex = (this.onboardingIndex - 1 + this.onboardingWishes.length) % this.onboardingWishes.length;
        }
        break;
      case 'BIRTHDAY WISHES':
        if (this.birthdayWishes.length > 0) {
          this.birthdayIndex = (this.birthdayIndex - 1 + this.birthdayWishes.length) % this.birthdayWishes.length;
        }
        break;
      case 'ANNIVERSARY WISHES':
        if (this.anniversaryWishes.length > 0) {
          this.anniversaryIndex = (this.anniversaryIndex - 1 + this.anniversaryWishes.length) % this.anniversaryWishes.length;
        }
        break;
    }
  }

  getCurrentCard(category: string) {
    switch (category) {
      case 'WELCOME ON BOARD':
        return this.onboardingWishes[this.onboardingIndex];
      case 'BIRTHDAY WISHES':
        return this.birthdayWishes[this.birthdayIndex];
      case 'ANNIVERSARY WISHES':
        return this.anniversaryWishes[this.anniversaryIndex];
      default:
        return null;
    }
  }
}
