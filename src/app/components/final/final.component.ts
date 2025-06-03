import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user-service.service';
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

  constructor(private formbulder: FormBuilder,private router:Router,private userService:UserService) {
    this.declarationForm = this.formbulder.group({
      checked: [false, Validators.requiredTrue],
      signature: ['', Validators.required],
      date: ['', Validators.required]
    });
    this.userService.setFormGroup('aFinal', this.declarationForm);

  }


  submitForm() {
    if (this.declarationForm.valid) {

      // ✅ Validate all registered forms
      if (!this.userService.isAllFormsValid()) {
        const incompleteSteps = this.userService.getInvalidSteps();
        alert("Please complete the following steps before submitting: " + incompleteSteps.join(', '));
        return;
      }

      // ✅ Save declaration data
      this.userService.setFormData('aFinal', this.declarationForm.value);

      // ✅ Combine all saved form data
      const allData = this.userService.getFormData();
  
      const finalData = {
        ...allData.personal,
        kyc: allData.kyc,
        passport: allData.passport,
        family: allData.family,
        previousEmployment: allData.previousEmployment,
        education: allData.education,
        skills: allData.skills,
        certification: allData.certification,
        documents: allData.documents,
        resume: allData.resume,
        aFinal: allData.aFinal
      };
    
console.log("finalData"+finalData)
      
      
  
      // Send to backend
  //     this.userService.submitFinalData(finalData).subscribe({
  //       next: (response) => {
  //         console.log('API Response:', response);
  //         alert("Form Submitted Successfully");
  //         this.declarationForm.reset();
  //         this.userService.clearFormData();
  //         this.router.navigate(['/thankYou']);
  //       },
  //       error: (err) => {
  //         console.error('API Error:', err);
  //         alert("Something went wrong while submitting. Please try again.");
  //       }
  //     });
  //   } else {
  //     // alert("All fields are mandatory*");
  //     this.declarationForm.markAllAsTouched();
  //   }
  }
  
}
}