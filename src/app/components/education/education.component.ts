import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

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
  constructor(private formBuilder: FormBuilder) {
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
    })
  }

  submitForm(){
    if(this.educationForm.valid){
      console.log("education details ",this.educationForm.value);
      const educationData = this.educationForm.value;
      this.qualification  = educationData.qualification; 
      this.specilization  = educationData.specilization; 
      this.instituteName  = educationData.instituteName; 
      this.universityName  = educationData.universityName; 
      this.time  = educationData.time; 
      this.fromDate  = educationData.from; 
      this.toDate  = educationData.to; 
      this.percentage  = educationData.percentage; 
      this.rollNo  = educationData.rollNo; 
      this.educationType  = educationData.educationType; 
    }else {
      alert('Please fill all required fields.');
    }
    
  }
}
