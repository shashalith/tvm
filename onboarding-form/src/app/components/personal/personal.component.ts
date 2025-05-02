import { Component } from '@angular/core';
import {FormArray, FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {

  userForm!:FormGroup;

  fname = '';
  // mname = '';
  lname = '';
  email = '';
  gender = '';
  bloodGroup = '';
  dob = '';
  merital = '';
  // marriegedate = '';
  current_address = '';
  country = '';
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
  constructor(private formBuilder:FormBuilder){
    this.userForm = this.formBuilder.group({
      fname:['',Validators.required],
      // mname:['',Validators.required],
      lname:['',Validators.required],
      email:['',[Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]
      ],
      gender:['',Validators.required],
      bloodGroup:['',Validators.required],
      dob:['',Validators.required],
      merital:['',Validators.required],
      // marriegedate:['',Validators.required],
      current_address:['',Validators.required],
      country:['',Validators.required],
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

  submitForm() {
    if (this.userForm.valid) {
      console.log("Form Values:", this.userForm.value);
  
      const formData = this.userForm.value;
      this.fname = formData.fname;
      this.lname = formData.lname;
      this.email = formData.email;
      this.gender = formData.gender;
      this.bloodGroup = formData.bloodGroup;
      this.dob = formData.dob;
      this.merital = formData.merital;
      this.current_address = formData.current_address;
      this.country = formData.country;
      this.current_state = formData.current_state;
      this.current_city = formData.current_city;
      this.current_pincode = formData.current_pincode;
      this.current_contact = formData.current_contact;
      this.permanent_address = formData.permanent_address;
      this.permanent_country = formData.permanent_country;
      this.permanent_state = formData.permanent_state;
      this.permanent_city = formData.permanent_city;
      this.permanent_pincode = formData.permanent_pincode;
      this.permanent_contact = formData.permanent_contact;
      this.bcp_address = formData.bcp_address;
      this.bcp_country = formData.bcp_country;
      this.bcp_state = formData.bcp_state;
      this.bcp_city = formData.bcp_city;
      this.bcp_pincode = formData.bcp_pincode;
      this.emergency_contact_name = formData.emergency_contact_name;
      this.emergency_contact_number = formData.emergency_contact_number;
      this.emergency_relationship = formData.emergency_relationship;
      this.year = formData.year;
      this.month = formData.month;
      this.relevantYear = formData.relevantYear;
    } else {
      alert("All fields are mandatory");
      console.log("This form is invalid!");
    }
  }
  
}
