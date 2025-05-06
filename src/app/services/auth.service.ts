import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/employee'; // Admin-related APIs
  // private userBaseUrl = 'http://localhost:8080/user'; // For user APIs, if applicable

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    // ✅ Use backticks
    return this.http.post(`${this.baseUrl}`, data);
  }

  login(data: any): Observable<any> {
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);

    // ✅ Use backticks
    return this.http.post(`${this.baseUrl}/login`, null, { params });
  }

}
