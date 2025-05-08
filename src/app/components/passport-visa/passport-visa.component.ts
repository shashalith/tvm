import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passport-visa',
  templateUrl: './passport-visa.component.html',
  styleUrls: ['./passport-visa.component.css']
})
export class PassportVisaComponent {
  passportValue: string = '';

  userForm!: FormGroup;
  nationality = '';
  ifPassport = '';
  passportNumber = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServiceService,
    private router: Router,

  ) {
    this.userForm = this.formBuilder.group({
      nationality: ['', Validators.required],
      ifPassport: ['', Validators.required],
      passportNumber: [''],
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log("passport form value: ", this.userForm.value);
      this.userService.setFormData('passport', this.userForm.value);
      // this.userForm.reset();
      this.router.navigate(['/family']);
      
    } else {
      alert("All fields are Mandatory")
      console.log("invalid form");

    }
  }
}
