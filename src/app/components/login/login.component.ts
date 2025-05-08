import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.http.post('http://localhost:8080/employee/verifyByEmail', loginData).subscribe({
        next: (res) => {
          console.log('Login successful:', res);
          // localStorage.setItem('token', 'true'); // Set login token
          this.router.navigate(['/personal']);
        },
        error: (err) => {
          console.error('Login failed:', err);
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
