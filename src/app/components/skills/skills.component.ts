import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillForm!:FormGroup;

  skillName = '';
  skillCategories = '';
  versionNum = '';
  experience_year = '';
  experience_month = '';
  selfRate = '';

  constructor (private formBuilder:FormBuilder){
    this.skillForm = this.formBuilder.group({
      skillName:['',Validators.required],
      skillCategories:['',Validators.required],
      versionNum:['',Validators.required],
      experience_year:['',Validators.required],
      experience_month:['',Validators.required],
      selfRate:['',Validators.required],
    });
  }

  submitForm(){
    if(this.skillForm.valid){
console.log("skills form: ",this.skillForm.value);

const formData =this.skillForm.value;
    }

  }
}
