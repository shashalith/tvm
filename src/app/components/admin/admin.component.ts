import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  employees: any[] = [];
  selectedEmployee: any = null;

  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.empService.getEmployees().subscribe({
      next: (res) => {
        this.employees = res.map((data, index) => ({
          index: index + 1,
          name: data["Personal Data"].fname + ' ' + data["Personal Data"].lname,
          email: data["Personal Data"].email,
          contact: data["Personal Data"].current_contact,
          gender: data["Personal Data"].gender,
          details: data
        }));
      },
      error: (err) => {
        console.error("Error fetching employees", err);
      }
    });
  }

  viewDetails(employee: any) {
    this.selectedEmployee = employee;
  }
}
