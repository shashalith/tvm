import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent {
  familyForm!: FormGroup;

      fatherName = "";
      fatherDOB = "";
      motherName = "";
      motherDOB = "";
      spouseName = ""; 
      spouseDOB = ""; 
      spouseGender = ""; 
      children = ""; 
  constructor(private formBuilder: FormBuilder) {
    this.familyForm = this.formBuilder.group({
      fatherName: ['', Validators.required],
      fatherDOB: ['', Validators.required],
      motherName: ['', Validators.required],
      motherDOB: ['', Validators.required],
      spouseName: [''],
      spouseDOB: [''],
      spouseGender: [''],
      children: ['No', Validators.required],
    });
  }

  submitForm(){
    if (this.familyForm.valid) {
      console.log('Family Details:', this.familyForm.value);
      const familyData = this.familyForm.value;
      this.fatherName = familyData.fatherName;  
      this.fatherDOB = familyData.fatherDOB;  
      this.motherName = familyData.motherName;  
      this.motherDOB = familyData.motherDOB;  
      this.spouseName = familyData.spouseName;  
      this.spouseDOB = familyData.spouseDOB;   
      this.spouseGender = familyData.spouseGender;   
      this.children = familyData.children;  
    } else {
      alert('Please fill all required fields.');
    }
  }
}
