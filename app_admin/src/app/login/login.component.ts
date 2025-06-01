// app_admin/src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
    <div class="col-md-4 mx-auto mt-5">
      <h2>Admin Login</h2>

      <form [formGroup]="form" (ngSubmit)="submit()">

        <input class="form-control mb-2"
               type="email"
               formControlName="email"
               placeholder="Email">

        <input class="form-control mb-3"
               type="password"
               formControlName="password"
               placeholder="Password">

        <button class="btn btn-primary w-100"
                [disabled]="form.invalid">
          Log in
        </button>
      </form>

      <p class="text-danger mt-2" *ngIf="error">{{ error }}</p>
    </div>
  `
})
export class LoginComponent {

    form: FormGroup;
    error = '';

    constructor(
        fb: FormBuilder,
        private auth: AuthService,
        private router: Router
    ) {
        this.form = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }


    submit(): void {
        if (this.form.invalid) { return; }

        const { email, password } = this.form.getRawValue();

        this.auth.login(email as string, password as string).subscribe({
            next: () => this.router.navigate(['']),
            error: (err) => {
                this.error = err?.error?.message || 'Login failed';
                console.error(err);
            }
        });
    }
}
