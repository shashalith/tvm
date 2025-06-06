import { Component } from '@angular/core';

export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  designation: string;
  location: string;
  photo: string;
  managerId?: number;
  team?: string;
}

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent {
  activeTab: string = 'business';
  searchTerm: string = '';
  sortBy: string = 'name';
  selectedEmployee: Employee | null = null;
  filteredEmployees: Employee[] = [];

  loggedInUserId: number = 3113; // ✅ Hardcoded logged-in user ID

  employees: Employee[] = [
    {
      id: 3113,
      name: 'Abdul Arif Ar',
      email: 'abdularif.rafiq@sensiple.com',
      department: 'CloudSens Services',
      designation: 'Developer',
      location: 'SSSPL (Offshore)',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      team: 'LLS-Ops US'
    },
    {
      id: 3117,
      name: 'Abdul Hadi Seppillai',
      email: 'sabdulhadi@sensiple.com',
      department: 'Consulting',
      designation: 'Associate',
      location: 'SSSPL (Offshore)',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2405,
      name: 'Abdul Salam Akbar',
      email: 'abduls@sensiple.com',
      department: 'Sales',
      designation: 'Associate Director',
      location: 'SSSPL (Offshore)',
      photo: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 1001,
      name: 'Mahasreebalajee Rengasamy',
      email: 'mahasree@sensiple.com',
      department: 'CloudSens Services',
      designation: 'Senior System Engineer',
      location: 'SSSPL (Offshore)',
      photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face',
      team: 'LLS-Ops US'
    },
    {
      id: 1002,
      name: 'Jnananuthu Govinthan',
      email: 'jnana@sensiple.com',
      department: 'CloudSens Services',
      designation: 'Junior Developer',
      location: 'SSSPL (Offshore)',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
      team: 'CCAI Reference Implementation'
    },
    {
      id: 1003,
      name: 'Ramkumar Raja',
      email: 'ramkumar@sensiple.com',
      department: 'CloudSens Services',
      designation: 'Senior Developer',
      location: 'SSSPL (Offshore)',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      team: 'Interactions, CloudSens Onboarding and Training'
    }
  ];

  constructor() {
    this.filteredEmployees = [...this.employees];
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.selectedEmployee = null;
  }

  getTeamMembers(): Employee[] {
    return this.employees.filter(emp => emp.department === 'CloudSens Services');
  }

  getLoggedInUser(): Employee | undefined {
    return this.employees.find(emp => emp.id === this.loggedInUserId);
  }

  selectEmployee(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  closeEmployeeDetail(): void {
    this.selectedEmployee = null;
  }

  filterEmployees(): void {
    if (!this.searchTerm.trim()) {
      this.filteredEmployees = [...this.employees];
    } else {
      this.filteredEmployees = this.employees.filter(emp =>
        emp.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        emp.id.toString().includes(this.searchTerm) ||
        emp.department.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.sortEmployees();
  }

  sortEmployees(): void {
    this.filteredEmployees.sort((a, b) => {
      switch (this.sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'department':
          return a.department.localeCompare(b.department);
        case 'designation':
          return a.designation.localeCompare(b.designation);
        default:
          return 0;
      }
    });
  }
}
