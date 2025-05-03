import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent {
certificateForm!:FormGroup;

certificateName: string = '';
certifiedBy: string = '';
completionDate: string = '';
marks: number = 0;


constructor(private formBuilder:FormBuilder,private router:Router,private userService:UserServiceService){
  this.certificateForm = this.formBuilder.group({

     certificateName:['',Validators.required],
     certifiedBy:['',Validators.required],
     completionDate:['',Validators.required],
     marks:['',Validators.required],
  });
}

submitForm(){
  if(this.certificateForm.valid){
    console.log("certificate details: ",this.certificateForm.value);
    this.userService.setFormData("Certificate Data: ",this.certificateForm.value);
    this.certificateForm.reset();
    alert("Certificate submitted successfully!");
    this.router.navigate(['/document']);
    
  }else{
    alert("All fields are madetory!");
  }
}
}
