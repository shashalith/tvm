import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passport-visa',
  templateUrl: './passport-visa.component.html',
  styleUrls: ['./passport-visa.component.css']
})
export class PassportVisaComponent implements OnInit {
  passportValue: string = '';
  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      nationality: ['', Validators.required],
      ifPassport: ['', Validators.required],
      passportNumber: ['']
    });

    this.userService.setFormGroup('passport', this.userForm);

    // Listen to changes in ifPassport field
    this.userForm.get('ifPassport')?.valueChanges.subscribe(value => {
      this.passportValue = value; 
      const passportCtrl = this.userForm.get('passportNumber');
      if (value === 'Yes') {
        passportCtrl?.setValidators(Validators.required);
      } else {
        passportCtrl?.clearValidators();
      }
      passportCtrl?.updateValueAndValidity();
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log("passport form value: ", this.userForm.value);
      this.userService.setFormData('passport', this.userForm.value);
      this.router.navigate(['/family']);
    } else {
      // alert("All fields are mandatory (if applicable)");
      this.userForm.markAllAsTouched();
      console.log("Invalid form", this.userForm.errors);
    }
  }
}
