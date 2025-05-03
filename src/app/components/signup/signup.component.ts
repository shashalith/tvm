import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder,private authService:AuthService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        fullName: ['', [Validators.required]],
        mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]]
      },
      { validators: this.passwordMatchValidator }
    );
  }

  // Custom validator to check if password and confirmPassword match
  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  // onSubmit(): void {
  //   if (this.signupForm.valid) {
  //     console.log('Form Submitted:', this.signupForm.value);
  //   } else {
  //     this.signupForm.markAllAsTouched();
  //   }
  // }
  onSubmit(): void {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      delete formData.confirmPassword; // confirmPassword ko server pe bhejne ki zarurat nahi
  
      this.authService.register(formData).subscribe({
        next: (res) => {
          console.log('Signup successful:', res);
          // Optionally: navigate to login or show success message
        },
        error: (err) => {
          console.error('Signup error:', err);
          // Optionally: show user-friendly error
        }
      });
    } else {
      
      this.signupForm.markAllAsTouched();
    }
  }
  
}
