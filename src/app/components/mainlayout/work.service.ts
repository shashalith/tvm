import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  private user = {
    name: 'kousi',
    email: 'kousi@gmail.com',
    mobile: '9786556563',
    joiningDate: '16 April 25'
  };

  private projects = [
    {
      name: 'frontend',
      startDate: '20 May 25',
      endDate: '20 May 25',
      manager: 'Kousalya',
      status: 'In Progress'
    },
    {
      name: 'TVM Onboarding and Training',
      startDate: '20 May 25',
      endDate: '20 May 25',
      manager: 'Ragu',
      status: 'In Progress'
    }
  ];

  getUser() {
    return this.user;
  }

  getProjects() {
    return this.projects;
  }

}
