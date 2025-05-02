import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-previous-employment',
  templateUrl: './previous-employment.component.html',
  styleUrls: ['./previous-employment.component.css']
})
export class PreviousEmploymentComponent implements OnInit {
  showPopup = false;
  employmentForm!: FormGroup;
  employmentList: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.employmentForm = this.fb.group({
      companyName: ['', Validators.required],
      designation: ['', Validators.required],
      employmentType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  openPopup(): void {
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
    this.employmentForm.reset();
  }

  saveEmployment(): void {
    if (this.employmentForm.valid) {
      console.log('Submitted Data:', this.employmentForm.value);
      this.employmentList.push(this.employmentForm.value);
      this.closePopup();
    } else {
      this.employmentForm.markAllAsTouched();
    }
  }
}
