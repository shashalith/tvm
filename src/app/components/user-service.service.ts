import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private formData: any = {};
  private formGroups: { [key: string]: FormGroup } = {}; 

  constructor(private http: HttpClient) {}


  setFormData(step: string, data: any) {
    this.formData[step] = data;
  }

  getFormData() {
    return this.formData;
  }

  clearFormData() {
    this.formData = {};
    this.formGroups = {}; 
  }

  submitFinalData(data: any): Observable<any> {
    const apiUrl = 'http://localhost:8080/personal'; 
    return this.http.post(apiUrl, data);
  }
  setFormGroup(step: string, formGroup: FormGroup) {
    this.formGroups[step] = formGroup;
  }
  isAllFormsValid(): boolean {
    return Object.values(this.formGroups).every(group => group.valid);
  }

  getInvalidSteps(): string[] {
    return Object.keys(this.formGroups).filter(key => !this.formGroups[key].valid);
  }
}
