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
  certificateList: any[] = [];

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
addCertificate() {
  if (this.certificateForm.valid) {
    this.certificateList.push(this.certificateForm.value);
    this.userService.setFormData("certification", this.certificateList);
    console.log("Certificate added: ", this.certificateForm.value);
    this.certificateForm.reset();
  } else {
    alert("All fields are mandatory!");
  }
}

deleteCertificate(index: number) {
  this.certificateList.splice(index, 1);
}
finalSubmit() {
  if (this.certificateList.length > 0) {
    this.userService.setFormData("certification", this.certificateList);
    this.router.navigate(['/document']);
  } else {
    alert("Please add at least one certificate.");
  }
}

// submitForm(){
//   if(this.certificateForm.valid){
//     console.log("certifications",this.certificateForm.value);
//     this.userService.setFormData("certification",this.certificateForm.value);
//     this.certificateForm.reset();
//     // alert("Certificate submitted successfully!");
//     this.router.navigate(['/document']);
    
//   }else{
//     alert("All fields are madetory!");
//   }
// }
}
