import { Component } from '@angular/core';

@Component({
  selector: 'app-timelog',
  templateUrl: './timelog.component.html',
  styleUrls: ['./timelog.component.css']
})
export class TimelogComponent {
  viewMode = 'list'; // or 'table'
  showAddEntry = false;

  missedDays = 1;
  missedSelectedDays = 1;
  selectedDate = new Date('2025-06-02');

  entries = [
    {
      title: 'Meeting',
      description: 'D2 design with validating...',
      duration: '3h 00m (16:00 - 19:00)',
      status: 'Sensiple PM Pending'
    },
    {
      title: 'Meeting',
      description: 'D2 screen navigation and understanding...',
      duration: '2h 10m (13:00 - 15:10)',
      status: 'Sensiple PM Pending'
    },
    {
      title: 'Meeting',
      description: 'Recalling the KT session and prep...',
      duration: '3h 00m (09:34 - 12:34)',
      status: 'Sensiple PM Pending'
    }
  ];

  week = [
    { label: 'MON\nJun 2', hours: '8h, 10m' },
    { label: 'TUE\nJun 3', hours: '-' },
    { label: 'WED\nJun 4', hours: '-' },
    { label: 'THU\nJun 5', hours: '-' },
    { label: 'FRI\nJun 6', hours: '-' },
    { label: 'SAT\nJun 7', hours: '-' },
    { label: 'SUN\nJun 8', hours: '-' }
  ];

  newEntry = {
    project: '',
    activity: '',
    start: '',
    end: '',
    workMode: 'Work from Office',
    device: 'Sensiple system',
    description: ''
  };

  getTotalHours(): string {
    return '8h, 10m';
  }

  saveEntry() {
    console.log('Saved Entry:', this.newEntry);
    this.entries.push({
      title: this.newEntry.activity || 'No Title',
      description: this.newEntry.description,
      duration: `${this.newEntry.start} - ${this.newEntry.end}`,
      status: 'New Entry'
    });
    this.showAddEntry = false;

    // Reset newEntry for next input
    this.newEntry = {
      project: '',
      activity: '',
      start: '',
      end: '',
      workMode: 'Work from Office',
      device: 'Sensiple system',
      description: ''
    };
  }

  edit(entry: any) {
    alert('Edit not implemented.');
  }

  delete(entry: any) {
    this.entries = this.entries.filter(e => e !== entry);
  }
}
