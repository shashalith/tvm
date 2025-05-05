import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent {
  declarationForm: FormGroup;

  check:boolean = false;
  signature = '';
  date = '';

  constructor(private formbulder: FormBuilder,private router:Router,private userService:UserServiceService) {
    this.declarationForm = this.formbulder.group({
      checked: [false, Validators.requiredTrue],
      signature: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.declarationForm.valid) {
      console.log(this.declarationForm.value);
      this.userService.setFormData('aFinal', this.declarationForm.value);

      // get All Dtata
      const allData = this.userService.getFormData();
      console.log("All Form Data",allData);
      
      this.declarationForm.reset();
      alert("Form Submitted Successfully");
     
    } else {
      this.declarationForm.markAllAsTouched();
    }
  }
}
