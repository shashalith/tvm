import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private formData: any = {};

  constructor(private http: HttpClient) {}


  setFormData(step: string, data: any) {
    this.formData[step] = data;
  }

  getFormData() {
    return this.formData;
  }

  clearFormData() {
    this.formData = {};
  }

  submitFinalData(data: any): Observable<any> {
    const apiUrl = 'http://localhost:8080/personal'; 
    return this.http.post(apiUrl, data);
  }
}
