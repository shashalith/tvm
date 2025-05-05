import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {

  userForm!:FormGroup;

  fname = '';
  mname = '';
  lname = '';
  email = '';
  gender = '';
  bloodGroup = '';
  dob = '';
  merital = '';
  marriegedate = '';
  current_address = '';
  current_country = '';
  current_state = '';
  current_city = '';
  current_pincode = '';
  current_contact = '';
  permanent_address = '';
  permanent_country = '';
  permanent_state = '';
  permanent_city = '';
  permanent_pincode = '';
  permanent_contact = '';
  bcp_address = '';
  bcp_country = '';
  bcp_state = '';
  bcp_city = '';
  bcp_pincode = '';
  emergency_contact_name = '';
  emergency_contact_number = '';
  emergency_relationship = '';
  year = '';
  month = '';
  relevantYear = '';
  constructor(
    private formBuilder:FormBuilder,
    private userService:UserServiceService,
    private router:Router,
  ){
    this.userForm = this.formBuilder.group({
      fname:['',Validators.required],
      mname:[''],
      lname:['',Validators.required],
      email:['',[Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]
      ],
      gender:['',Validators.required],
      bloodGroup:['',Validators.required],
      dob:['',Validators.required],
      merital:['',Validators.required],
      marriegedate:[''],
      current_address:['',Validators.required],
      current_country:['',Validators.required],
      current_state:['',Validators.required],
      current_city:['',Validators.required],

      current_pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],


      current_contact:['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      permanent_country:['',Validators.required],
      permanent_address:['',Validators.required],
      permanent_state:['',Validators.required],
      permanent_city:['',Validators.required],

      permanent_pincode:['', [Validators.required, Validators.pattern(/^\d{6}$/)]],

      permanent_contact:['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      bcp_address:['',Validators.required],
      bcp_country:['',Validators.required],
      bcp_state:['',Validators.required],
      bcp_city:['',Validators.required],

      bcp_pincode:['', [Validators.required, Validators.pattern(/^\d{6}$/)]],

      emergency_contact_name:['',Validators.required],

      emergency_contact_number:['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      emergency_relationship:['',Validators.required],
      year:['',Validators.required],
      month:['',Validators.required],
      relevantYear:['',Validators.required],
    })
  };

  // submitForm() {
  //   if (this.userForm.valid) {
  //     console.log('Form Submitted', this.userForm.value);
  //     this.userService.setFormData('personal', this.userForm.value);
  //     this.router.navigate(['/kyc']);
  //   } else {
  //     alert("All fields are mandatory");
  //     console.log("This form is invalid!");
  //   }
  // }
  
  submitForm() {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
      this.userService.setFormData('personal', this.userForm.value);
      // console.log('Stored Data:', this.userService.getFormData());
      this.userForm.reset();
      this.router.navigate(['/kyc']);
    } else {
      alert("All fields are mandatory");
      console.log("This form is invalid!");
    }
  }
  
  
  
}
