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
  fileErrors: { [key: string]: string } = {};
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
    const maxSizeInMB = 1;
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    if (file.size > maxSizeInBytes) {
       this.fileErrors[controlName] = 'File size must be less than 1 MB';
      // alert(`${controlName} file size should not exceed ${maxSizeInMB} MB.`);
      this.documentForm.patchValue({ [controlName]: null });
      return;
    }
    else {
      this.fileErrors[controlName] = '';
      this.documentForm.patchValue({ [controlName]: file });
    }
  }
}
  submitForm() {
  if (this.documentForm.valid) {
    const formData = new FormData();
    Object.keys(this.documentForm.controls).forEach(key => {
      formData.append(key, this.documentForm.get(key)?.value);
    });

    this.userService.uploadDocuments(formData).subscribe(
      response => {
        console.log('Upload success:', response);
        this.router.navigate(['/resume']);
      },
      error => {
        console.error('Upload failed:', error);
        alert('Upload failed. Please try again.');
      }
    );
  } else {
    this.documentForm.markAllAsTouched();
    // alert("Please fill all required documents.");
  }
}

}
