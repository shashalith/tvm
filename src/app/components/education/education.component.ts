import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: any[] = [];
  educationForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private http: HttpClient
  ) {
    this.educationForm = this.formBuilder.group({
      qualification: ['', Validators.required],
      specilization: ['', Validators.required],
      instituteName: ['', Validators.required],
      universityName: ['', Validators.required],
      time: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      percentage: ['', Validators.required],
      rollNo: ['', Validators.required],
      educationType: ['', Validators.required],
    });

    this.userService.setFormData('education', this.educationForm);
  }

  ngOnInit(): void {
    this.loadEducationData();
  }

  loadEducationData(): void {
    this.http.get<any[]>('assets/education.json').subscribe(
      (data) => {
        this.educationList = data;
        this.userService.setFormData('education', this.educationList);
      },
      (error) => {
        console.error('Failed to load education data', error);
      }
    );
  }

  submitForm(): void {
    if (this.educationForm.valid) {
      this.educationList.push(this.educationForm.value);
      this.userService.setFormData('education', this.educationList);
      this.educationForm.reset();
      this.router.navigate(['/skills']);
    } else {
      this.educationForm.markAllAsTouched();
    }
  }
}
