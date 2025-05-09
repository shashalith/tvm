import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pending-user',
  templateUrl: './pending-user.component.html',
  styleUrls: ['./pending-user.component.css']
})
export class PendingUserComponent {
  searchTerm: string = '';
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any[]>('https://your-api-endpoint.com/users')
      .subscribe((data) => {
        this.users = data.map(user => ({
          ...user,
          status: this.checkIfFormSubmitted(user) ? 'Submitted' : 'Pending'
        }));
      });
  }

  checkIfFormSubmitted(user: any): boolean {
    return user.fullName && user.mobile && user.aadhar && user.dob && user.gender;
  }

  filteredUsers() {
    return this.users.filter(user =>
      (user.fullName || '').toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
