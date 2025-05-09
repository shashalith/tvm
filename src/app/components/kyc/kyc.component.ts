import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.css']
})
export class KycComponent {

  kycForm!: FormGroup;

  pan = '';
  panName = '';
  aadhar = '';
  aadharName = '';
  uan = '';
  pf = '';
  hdfc = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
    this.kycForm = this.formBuilder.group({
      pan: ['', [Validators.required, Validators.pattern(/[A-Z]{5}[0-9]{4}[A-Z]{1}/)]],
      panName: ['', Validators.required],
      aadhar: ['', [Validators.required, Validators.pattern(/^\d{12}$/)]],
      aadharName: ['', Validators.required],
      uan: ['', [Validators.required, Validators.pattern(/^\d{12}$/)]],
      pf: ['', Validators.required],
      hdfc: ['', Validators.required],
    });
    this.userService.setFormGroup('kyc', this.kycForm);
  }

  submitForm() {
    if (this.kycForm.valid) {
      console.log('Form Values:', this.kycForm.value);
      this.userService.setFormData('kyc', this.kycForm.value);
      this.kycForm.reset(); // Optionally reset the form
      this.router.navigate(['/passport']);
    } else {
      // alert('All fields are mandatory');
      this.kycForm.markAllAsTouched();
      console.log('This form is invalid!');
    }
  }
}
