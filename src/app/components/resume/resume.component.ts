import { Component } from '@angular/core';
import { Validators, FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user-service.service';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  resumeForm!:FormGroup;
  achievements: string = '';
  resumeCate='';
  constructor(private formBuilder:FormBuilder,private router:Router,private userService:UserService){
    this.resumeForm = this.formBuilder.group({
      achievements:['',Validators.required],
      resumeCate:['',Validators.required],
    });
    this.userService.setFormData('education', this.resumeForm);
  }

  submitForm(){
    if(this.resumeForm.valid){
    console.log(this.resumeForm.value);
    this.userService.setFormData("resume",this.resumeForm.value);
    this.resumeForm.reset();
    this.router.navigate(['/final']);
    // this.achievements = this.resumeForm.value.achievements;
    // this.resumeCate = this.resumeForm.value.resumeCate;
  }else{
    alert("All fields are mandetory")
    console.log("Invalid form");
    
  }
  }
}
