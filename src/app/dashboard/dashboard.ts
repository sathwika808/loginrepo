import { Component } from '@angular/core';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule , FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
constructor(
    private auth: AuthService,
    private router: Router,
  ) {}


  users = [
  {
    username: 'john_doe',
    email: 'john.doe@example.com'
  },
  {
    username: 'jane_smith',
    email: 'jane.smith@example.com'
  },
  {
    username: 'alex_kumar',
    email: 'alex.kumar@example.com'
  },
  {
    username: 'sathwika',
    email: 'sathwika.l@example.com'
  }
];

  email = '';
  username = '';


  ngOnInit() {
    const storedEmail = localStorage.getItem('rememberUser');

    if (storedEmail) {
      this.email = storedEmail;

      this.username = storedEmail.split('@')[0];
    } else {
      this.username = 'User';
    }

    console.log('Email:', this.email);
    console.log('Username:', this.username);
  }
  logout() {
    this.auth.logoutApi().subscribe({
      next: () => {
        this.auth.logout();
        this.router.navigate(['']);
      },
      error: () => {
        this.auth.logout();
        this.router.navigate(['']);
      },
    });
  }
}
