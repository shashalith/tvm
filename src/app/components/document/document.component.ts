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

      // Clear the file input element in DOM to prevent InvalidStateError
      event.target.value = ''; // ✅ safe and allowed
      this.documentForm.get(controlName)?.setValue(null); // use setValue, not patchValue

      return;
    } else {
      this.fileErrors[controlName] = '';
      this.documentForm.get(controlName)?.setValue(file); // ✅ use setValue instead of patchValue
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
