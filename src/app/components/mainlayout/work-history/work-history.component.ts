import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent {
userForm!: FormGroup;
  projects: any[] = [];

  constructor(private fb: FormBuilder, private workService: WorkService) {}

  ngOnInit(): void {
    const user = this.workService.getUser();         
    this.projects = this.workService.getProjects();  

    this.userForm = this.fb.group({
      name: [user.name],
      email: [user.email],
      mobile: [user.mobile],
      joiningDate: [user.joiningDate]
    });
  }

}
