import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  currentState: string = 'Login';
  isPasswordVisible: boolean = false;
  token: string | null = localStorage.getItem('token');
  backendUrl: string = 'http://your-backend-url.com'; // Replace with actual backend URL

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      name: [''],
      email: ['vir@gmail.com', [Validators.required, Validators.email]],
      password: ['123123', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (this.token) {
      this.router.navigate(['/']);
    }
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const { email, password, name } = this.loginForm.value;
    if (this.currentState === 'Sign Up') {
      this.apiService.register({ email, password, name }).subscribe(
        (data: any) => {
          if (data.success) {
            localStorage.setItem('token', data.token);
            this.apiService.token$.next(true);
            this.router.navigate(['/']);
          } else {
            this.toastr.error(data.message);
          }
        },
        (error: any) => {
          this.toastr.error(error);
        }
      );
    } else {
      this.apiService.login({ email, password }).subscribe(
        (data: any) => {
          if (data.success) {
            localStorage.setItem('token', data.token);
            this.apiService.token$.next(true);
            this.router.navigate(['/']);
          } else {
            this.toastr.error(data.message);
          }
        },
        (error: any) => {
          this.toastr.error(error);
        }
      );
    }
  }

  switchState(state: string): void {
    this.currentState = state;
    this.loginForm.reset();
  }
}
