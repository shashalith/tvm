import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  startDate = new Date(2025, 3, 4); // April 4, 2025
  endDate = new Date(2025, 7, 2);   // August 2, 2025
  dateRange = '';

  viewMode: 'list' | 'grid' = 'list';
  filterActive = false;

  cards = [
    { label: 'Training', title: 'CloudSens Onboarding and Training' },
    { label: 'Onboarding process cx', title: 'CloudSens Onboarding and Training' },
    { label: 'Default', title: 'CloudSens Onboarding and Training' }
  ];

  constructor() {
    this.updateDateRange();
  }

  updateDateRange() {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const startStr = this.startDate.toLocaleDateString('en-US', options);
    const endStr = this.endDate.toLocaleDateString('en-US', options);
    this.dateRange = `${startStr} - ${endStr}`;
  }

  setViewMode(mode: 'list' | 'grid') {
    this.viewMode = mode;
  }

  toggleFilter() {
    this.filterActive = !this.filterActive;
  }

  goToPreviousDate() {
    this.startDate = this.addMonths(this.startDate, -1);
    this.endDate = this.addMonths(this.endDate, -1);
    this.updateDateRange();
  }

  goToNextDate() {
    this.startDate = this.addMonths(this.startDate, 1);
    this.endDate = this.addMonths(this.endDate, 1);
    this.updateDateRange();
  }

  private addMonths(date: Date, months: number): Date {
    const d = new Date(date);
    d.setMonth(d.getMonth() + months);
    return d;
  }
}
