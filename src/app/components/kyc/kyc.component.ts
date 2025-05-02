import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
    this.kycForm = this.formBuilder.group({
      pan: ['', [Validators.required, Validators.pattern(/[A-Z]{5}[0-9]{4}[A-Z]{1}/)]],
      panName: ['', Validators.required],
      aadhar: ['', [Validators.required, Validators.pattern(/^\d{12}$/)]],
      aadharName: ['', Validators.required],
      uan: ['', [Validators.required, Validators.pattern(/^\d{12}$/)]],
      pf: ['', Validators.required],
      hdfc: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.kycForm.valid) {
      console.log('Form Values:', this.kycForm.value);

      const formData = this.kycForm.value;
      this.pan = formData.pan;
      this.panName = formData.panName;
      this.aadhar = formData.aadhar;
      this.aadharName = formData.aadharName;
      this.uan = formData.uan;
      this.pf = formData.pf;
      this.hdfc = formData.hdfc;
    } else {
      alert('All fields are mandatory');
      console.log('This form is invalid!');
    }
  }
}
