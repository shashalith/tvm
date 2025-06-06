import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {
  currentTab: 'notification' | 'announcement' = 'announcement';
  currentPage = 1;

  announcements = [
    { title: 'WFH Policy - Highlights', startDate: '06 Mar 25', endDate: '06 Mar 25' },
    { title: 'Feb Payroll Info', startDate: '24 Feb 25', endDate: '28 Feb 25' },
    { title: 'Attendance Management', startDate: '21 Feb 25', endDate: '21 Feb 25' },
    { title: 'ETAQ LMS Integration', startDate: '19 Feb 25', endDate: '19 Feb 25' },
    { title: 'Work hour policy', startDate: '17 Feb 25', endDate: '17 Feb 25' },
    { title: 'ISMS Awareness Training', startDate: '15 Feb 25', endDate: '15 Feb 25' },
    { title: 'Emails are not delivering', startDate: '14 Feb 25', endDate: '14 Feb 25' },
    { title: 'WFH policy', startDate: '13 Feb 25', endDate: '13 Feb 25' },
    { title: 'Walkin Drive', startDate: '08 Feb 25', endDate: '08 Feb 25' },
    { title: 'Payroll Information', startDate: '27 Jan 25', endDate: '30 Jan 25' },
    { title: 'Investment Declaration FY 2025-26', startDate: '22 Apr 25', endDate: '23 Apr 25' },
    { title: 'March Payroll Info', startDate: '18 Apr 25', endDate: '18 Apr 25' },
    { title: 'Password Security', startDate: '31 Mar 25', endDate: '31 Mar 25' },
    { title: 'WSUS Patch Update', startDate: '27 Mar 25', endDate: '27 Mar 25' },
    { title: 'March TS Reminder', startDate: '26 Mar 25', endDate: '26 Mar 25' },
    { title: 'Investment Proof', startDate: '18 Mar 25', endDate: '18 Mar 25' },
    { title: 'Work hour Policy', startDate: '12 Mar 25', endDate: '12 Mar 25' },
    { title: 'DST is ending', startDate: '04 Mar 25', endDate: '04 Mar 25' },
  ];

  get visibleAnnouncements() {
    const pageSize = 10;
    const start = (this.currentPage - 1) * pageSize;
    return this.announcements.slice(start, start + pageSize);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  openCalendar(announcement: any) {
    console.log('Calendar clicked for:', announcement);
  }

  switchTab(tab: 'notification' | 'announcement') {
    this.currentTab = tab;
  }

}
