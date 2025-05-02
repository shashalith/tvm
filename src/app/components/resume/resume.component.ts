import { Component } from '@angular/core';
import { Validators, FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  resumeForm!:FormGroup;
  achievements: string = '';
  resumeCate='';
  constructor(private formBuilder:FormBuilder){
    this.resumeForm = this.formBuilder.group({
      achievements:['',Validators.required],
      resumeCate:['',Validators.required],
    })
  }

  submitForm(){
    if(this.resumeForm.valid){
    console.log(this.resumeForm.value);
    this.achievements = this.resumeForm.value.achievements;
    this.resumeCate = this.resumeForm.value.resumeCate;
  }else{
    alert("All fields are mandetory")
    console.log("Invalid form");
    
  }
  }
}
