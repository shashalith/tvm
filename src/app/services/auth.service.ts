import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/admin'; // Admin-related APIs
  private userBaseUrl = 'http://localhost:8080/user'; // For user APIs, if applicable

  constructor(private http: HttpClient) {}

  // Register a user
  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  // Login for admin or user
  login(data: any): Observable<any> {
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);

    return this.http.post(`${this.baseUrl}/login`, null, { params });
  }

  // Check the role of the logged-in user
  checkRole(): Observable<any> {
    return this.http.get(`${this.baseUrl}/check-role`);
  }
}
