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
          name: data["personal"].fname + ' ' + data["personal"].lname,
          email: data["personal"].email,
          contact: data["personal"].current_contact,
          gender: data["personal"].gender,
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
