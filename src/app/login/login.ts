import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  loading = false;
  showPassword = false;
  showSuccess = false;



  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });


  // Convenience getters for template
  get email() { return this.form.controls.email; }
  get password() { return this.form.controls.password; }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  clearFieldError(field: 'email' | 'password'): void {
    // Clears UI error state while typing (like your clearError)
    const control = this.form.controls[field];
    if (control.invalid) {
      control.markAsUntouched();
    }
  }

  async submit(): Promise<void> {
    // mark touched so errors show
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    this.loading = true;

    try {
      // TODO: replace with real API call
      await new Promise((r) => setTimeout(r, 1500));

      this.showSuccess = true;

      // simulate redirect
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1200);

    } catch {
      // example: show generic error on password field
      this.password.setErrors({ loginFailed: true });
    } finally {
      this.loading = false;
    }
  }

  async socialLogin(provider: 'Google' | 'GitHub' | 'Twitter'): Promise<void> {
    if (this.loading) return;

    this.loading = true;
    try {
      await new Promise((r) => setTimeout(r, 900));
      console.log(`Would redirect to ${provider} auth...`);
      // window.location.href = `/auth/${provider.toLowerCase()}`;
    } finally {
      this.loading = false;
    }
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
