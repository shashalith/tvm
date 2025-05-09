import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillForm!: FormGroup;
  skillList: any[] = [];
  showPopup = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.skillForm = this.formBuilder.group({
      skillName: ['', Validators.required],
      skillCategories: ['', Validators.required],
      versionNum: ['', Validators.required],
      experience_year: ['', Validators.required],
      experience_month: ['', Validators.required],
      selfRate: ['', Validators.required],
    });
    this.userService.setFormGroup('skills',this.skillForm);
  }

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    // this.skillForm.reset();
  }

  addSkill() {
    if (this.skillForm.valid) {
      this.skillList.push(this.skillForm.value);
      this.userService.setFormData("skills", this.skillList);
      console.log("Skill added: ", this.skillForm.value);
      this.skillForm.reset();
      this.showPopup = false;
    } else {
      this.skillForm.markAllAsTouched();
      // alert('All fields are mandatory');
    }
  }

  deleteSkill(index: number) {
    this.skillList.splice(index, 1);
  }

  finalSubmit() {
    if (this.skillList.length > 0) {
      this.userService.setFormData("skills", this.skillList);
      this.router.navigate(['/certificate']);
    } else {
      alert("Please add at least one skill");
    }
  }
}
