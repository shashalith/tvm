import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addopening',
  templateUrl: './addopening.component.html',
  styleUrls: ['./addopening.component.css']
})
export class AddOpeningComponent {
  jobForm: FormGroup;
  submittedJobs: any[] = [];

  constructor(private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      qualifications: ['', Validators.required],
      yearOfPassout: ['', [Validators.required, Validators.min(1900)]],
      location: ['', Validators.required],
      experience: ['', [Validators.required, Validators.min(0)]],
      skills: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit() {
    if (this.jobForm.valid) {
      const formData = {
        ...this.jobForm.value,
        skills: this.jobForm.value.skills.split(',').map((s: string) => s.trim())
      };
      this.submittedJobs.push(formData);
      console.log('Job Posted:', formData);
      this.jobForm.reset();
    } else {
      this.jobForm.markAllAsTouched();
    }
  }
}
