// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-final',
//   templateUrl: './final.component.html',
//   styleUrls: ['./final.component.css']
// })
// export class FinalComponent {

// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent {
  declarationForm: FormGroup;

  check:boolean = false;
  signature = '';
  date = '';

  constructor(private formbulder: FormBuilder) {
    this.declarationForm = this.formbulder.group({
      checked: [false, Validators.requiredTrue],
      signature: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.declarationForm.valid) {
      console.log(this.declarationForm.value);
      this.check = this.declarationForm.value.check;
      this.signature = this.declarationForm.value.signature;
      this.date = this.declarationForm.value.date;
    } else {
      this.declarationForm.markAllAsTouched();
    }
  }
}
