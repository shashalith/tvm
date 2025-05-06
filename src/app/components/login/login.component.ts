// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   loginForm!: FormGroup;
//   isEmailLogin: boolean = true; // by default email login

//   constructor(
//     private fb: FormBuilder,
//     private http: HttpClient,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.initForm();
//   }

//   initForm(): void {
//     this.loginForm = this.fb.group({
//       username: [
//         '',
//         this.isEmailLogin
//           ? [Validators.required, Validators.email]
//           : [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]
//       ],
//       password: ['', Validators.required]
//     });
//   }

//   toggleLoginType(): void {
//     this.isEmailLogin = !this.isEmailLogin;

//     const usernameControl = this.loginForm.get('username');
//     if (usernameControl) {
//       usernameControl.clearValidators();
//       usernameControl.setValidators(
//         this.isEmailLogin
//           ? [Validators.required, Validators.email]
//           : [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]
//       );
//       usernameControl.updateValueAndValidity();
//     }
//   }

//   onSubmit(): void {
//     if (this.loginForm.valid) {
//       const loginData = {
//         email: this.loginForm.value.username, // backend expects `email` key
//         password: this.loginForm.value.password
//       };
      
//       this.http.post('http://localhost:8080/admin/login', loginData).subscribe({
//         next: (res) => {
//           console.log('Login successful:', res);
//           this.router.navigate(['/admin']);
//         },
//         error: (err) => {
//           console.error('Login failed:', err);
//         }
//       });
//     } else {
//       this.loginForm.markAllAsTouched();
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
AuthService
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isEmailLogin: boolean = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService, // ✅ Injecting AuthService
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      username: [
        '',
        this.isEmailLogin
          ? [Validators.required, Validators.email]
          : [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]
      ],
      password: ['', Validators.required]
    });
  }

  toggleLoginType(): void {
    this.isEmailLogin = !this.isEmailLogin;

    const usernameControl = this.loginForm.get('username');
    if (usernameControl) {
      usernameControl.clearValidators();
      usernameControl.setValidators(
        this.isEmailLogin
          ? [Validators.required, Validators.email]
          : [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]
      );
      usernameControl.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = this.isEmailLogin
  ? { email: this.loginForm.value.username, password: this.loginForm.value.password }
  : { mobile: this.loginForm.value.username, password: this.loginForm.value.password };
      console.log(loginData);
      

      this.authService.login(loginData).subscribe({
        next: (res) => {
          console.log('Login successful:', res);
          this.router.navigate(['/admin']);
        },
        error: (err) => {
          console.error('Login failed:', err);
          // Show a message to user, optionally
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
