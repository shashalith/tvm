import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';


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
  constructor(
    private formBuilder: FormBuilder,
    private userService:UserService,
    private router:Router,
  ) {
    this.familyForm = this.formBuilder.group({
      fatherName: ['', Validators.required],
      fatherDOB: ['', Validators.required],
      motherName: ['', Validators.required],
      motherDOB: ['', Validators.required],
      spouseName: [''],
      spouseDOB: [''],
      spouseGender: [''],
      children: ['', Validators.required],
    });
    this.userService.setFormGroup('family', this.familyForm);

  }

  submitForm(){
    if (this.familyForm.valid) {
      console.log('Family Details:', this.familyForm.value);
      this.userService.setFormData("family",this.familyForm.value);
      this.familyForm.reset();
      this.router.navigate(["/previousEmployee"]);

    } else {
      this.familyForm.markAllAsTouched();
      // alert('All fields are mandatory');
      console.log('this form is invalid');
      
    }
  }
}
