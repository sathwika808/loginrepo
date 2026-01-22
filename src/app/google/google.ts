import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IftaLabel } from 'primeng/iftalabel';

import { AuthService } from '../auth-service';

@Component({
  selector: 'app-google',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
IftaLabel,
    ButtonModule,
    CheckboxModule,
    PasswordModule,
    InputTextModule,
    FloatLabelModule,
  ],
  templateUrl: './google.html',
  styleUrl: './google.css'
})
export class Google {

  loginForm!: FormGroup;
  isLoading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) return;

    const { username, password, remember } = this.loginForm.value;
    this.isLoading = true;
    this.error = '';

    this.auth.login(username, password).subscribe({
      next: (res) => {
        const token = res.token || res.accessToken;
        if (!token) {
          this.error = 'Token not received';
          return;
        }

        this.auth.saveToken(token);
        if (remember) localStorage.setItem('rememberUser', username);
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.error = 'Invalid credentials';
      },
      complete: () => {
        this.isLoading = false;
        this.cd.detectChanges();
      }
    });
  }
}
