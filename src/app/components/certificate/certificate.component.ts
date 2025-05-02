import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

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


constructor(private formBuilder:FormBuilder){
  this.certificateForm = this.formBuilder.group({

     CertificateName:['',Validators.required],
     certifiedBy:['',Validators.required],
     CompletionDate:['',Validators.required],
     marks:['',Validators.required],
  });
}

submitForm(){
  if(this.certificateForm.valid){
    console.log("certificate details: ",this.certificateForm.value);
    
  }
}
}
