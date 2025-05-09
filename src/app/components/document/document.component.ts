import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {
  documentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.documentForm = this.fb.group({
      panCard: [null, Validators.required],
      aadharCard: [null, Validators.required],
      pSizePhoto: [null, Validators.required],
      matric:[null, Validators.required],
      intermediate: [null, Validators.required],
      graduationMarksheet: [null, Validators.required],
      postGraduation: [null, Validators.required],
      checkLeaf: [null, Validators.required],
      passbook: [null, Validators.required],
    });
    this.userService.setFormData('education', this.documentForm);
  }

  onFileChange(event: any, controlName: string) {
    const file = event.target.files[0];
    if (file) {
      this.documentForm.patchValue({ [controlName]: file });
    }
  }

  submitForm() {
    if (this.documentForm.valid) {
      console.log("Document Data:", this.documentForm.value);
      this.userService.setFormData('documents', this.documentForm.value);
      this.router.navigate(['/resume']);
    } else {
      this.documentForm.markAllAsTouched();
      alert("Please fill all required documents.");
    }
  }
}
