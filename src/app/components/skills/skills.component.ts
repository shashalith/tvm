import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillForm!: FormGroup;
  skillList: any[] = [];
  showPopup = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) {
    this.skillForm = this.formBuilder.group({
      skillName: ['', Validators.required],
      skillCategories: ['', Validators.required],
      versionNum: ['', Validators.required],
      experience_year: ['', Validators.required],
      experience_month: ['', Validators.required],
      selfRate: ['', Validators.required],
    });

    this.userService.setFormGroup('skills', this.skillForm);
  }

  ngOnInit(): void {
    this.loadSkillsFromJson();
  }

  loadSkillsFromJson(): void {
    this.http.get<any[]>('assets/skills.json').subscribe(
      (data) => {
        this.skillList = data;
        this.userService.setFormData('skills', this.skillList);
      },
      (error) => {
        console.error('Error loading skills.json:', error);
      }
    );
  }

  openPopup(): void {
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
    // Optional: reset the form
    // this.skillForm.reset();
  }

  addSkill(): void {
    if (this.skillForm.valid) {
      this.skillList.push(this.skillForm.value);
      this.userService.setFormData("skills", this.skillList);
      this.skillForm.reset();
      this.showPopup = false;
    } else {
      this.skillForm.markAllAsTouched();
    }
  }

  deleteSkill(index: number): void {
    this.skillList.splice(index, 1);
  }

  finalSubmit(): void {
    if (this.skillList.length > 0) {
      this.userService.setFormData("skills", this.skillList);
      this.router.navigate(['/certificate']);
    } else {
      alert("Please add at least one skill");
    }
  }
}
