import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-passport-visa',
  templateUrl: './passport-visa.component.html',
  styleUrls: ['./passport-visa.component.css']
})
export class PassportVisaComponent {
  passportValue: string = '';

  userForm!:FormGroup;
  nationality = '';
  ifPassport = '';
  passportNumber = '';

  constructor(private formBuilder:FormBuilder){
    this.userForm = this.formBuilder.group({
      nationality:['',Validators.required],
      ifPassport:['',Validators.required],
      passportNumber:['',Validators.required],
    });
  }

  submitForm(){
    console.log("passport form value: ",this.userForm.value);

    const formData = this.userForm.value;
    this.nationality = formData.nationality;
    this.ifPassport = formData.ifPassport;
    this.passportNumber = formData.passportNumber;
  }
}
