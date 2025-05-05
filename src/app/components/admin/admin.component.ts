// import { Component, OnInit } from '@angular/core';
// import { EmployeeService } from '../../services/employee.service';

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css']
// })
// export class AdminComponent implements OnInit {
//   employees: any[] = [];
//   selectedEmployee: any = null;

//   constructor(private empService: EmployeeService) {}

//   ngOnInit(): void {
//     this.empService.getEmployees().subscribe({
//       next: (res) => {
//         this.employees = res.map((data, index) => ({
//           index: index + 1,
//           name: data["personal"].fname + ' ' + data["personal"].lname,
//           email: data["personal"].email,
//           contact: data["personal"].current_contact,
//           gender: data["personal"].gender,
//           details: data
//         }));
//       },
//       error: (err) => {
//         console.error("Error fetching employees", err);
//       }
//     });
//   }

//   viewDetails(employee: any) {
//     this.selectedEmployee = employee;
//   }
// }


import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  employees: any[] = [];
  filteredEmployees: any[] = [];
  selectedEmployee: any = null;
  searchText: string = '';

  constructor(private empService: EmployeeService) {}

  // ngOnInit(): void {
  //   this.empService.getEmployees().subscribe({
  //     next: (res) => {
  //       this.employees = res.map((data, index) => ({
  //         index: index + 1,
  //         name: data.fname + ' ' + data.lname,
  //         email: data.email,
  //         contact: data.current_contact,
  //         gender: data.gender,
  //         details: data
  //       }));
  //       this.filteredEmployees = [...this.employees];
  //     },
  //     error: (err) => {
  //       console.error("Error fetching employees", err);
  //     }
  //   });
  // }
  ngOnInit(): void {
    // alert("sss")
    // debugger
    this.empService.getEmployees().subscribe({
      
      next: (d:any) => {
       let a= d.body[0]
        console.log("Response:", a);
        // console.log(res);
        
        // const employeeList = Array.isArray(res) ? res : [res[0]];
        // console.log(employeeList);
        
        this.employees = d.body.map((data: any, index: number) => ({
          index: index + 1,
          name: data.fname + ' ' + data.lname,
          email: data.email,
          contact: data.current_contact,
          gender: data.gender,
          details: data
        }));
        
  
        this.filteredEmployees = [...this.employees];
      },
      error: (err) => {
        console.error("Error fetching employees", err);
      }
    });
  }
  
  onSearch() {
    const term = this.searchText.trim().toLowerCase();
    this.filteredEmployees = this.employees.filter(emp =>
      emp.name.toLowerCase().includes(term)
    );
  }

  viewDetails(employee: any) {
    this.selectedEmployee = employee;
  }

  closePopup() {
    this.selectedEmployee = null;
  }
}
