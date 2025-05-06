// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin-login',
//   templateUrl: './admin-login.component.html',
//   styleUrls: ['./admin-login.component.css']
// })
// export class AdminLoginComponent {

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onAdminLogin(): void {
    if (this.adminLoginForm.valid) {
      const loginData = this.adminLoginForm.value;

      console.log(loginData);
      
      this.http.post('http://localhost:8080/admin/login', loginData).subscribe({
        next: (res) => {
          console.log('Admin login successful:', res);
          this.router.navigate(['/admin']); 
        },
        error: (err) => {
          console.error('Admin login failed:', err);
        }
      });
    } else {
      this.adminLoginForm.markAllAsTouched();
    }
  }
}
