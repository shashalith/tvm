import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  educationList:any[] = [];
  educationForm!: FormGroup;

  qualification = "";
  specilization = '';
  instituteName = '';
  universityName = '';
  time = '';
  fromDate = '';
  toDate = '';
  percentage = '';
  rollNo = '';
  educationType = '';
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private userService:UserService,

  ) {
    this.educationForm = this.formBuilder.group({
      qualification:['',Validators.required],
      specilization:['',Validators.required],
      instituteName:['',Validators.required],
      universityName:['',Validators.required],
      time:['',Validators.required],
      fromDate:['',Validators.required],
      toDate:['',Validators.required],
      percentage:['',Validators.required],
      rollNo:['',Validators.required],
      educationType:['',Validators.required],
    });
    this.userService.setFormData('education', this.educationForm);
  }

  submitForm() {
    if (this.educationForm.valid) {
      this.educationList.push(this.educationForm.value);
      console.log("Education form submitted", this.educationList);
  
      // Store the whole array in userService
      this.userService.setFormData("education", this.educationList);
  
      this.educationForm.reset();
      this.router.navigate(['/skills']);
    } else {
      alert('All fields are mandatory');
    }
  }
  
}
