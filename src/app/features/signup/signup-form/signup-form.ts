import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignupPayload, SubmissionState } from './signup-form.model';
import { SignupApi } from '../../../core/services/signup-api';

@Component({
  selector: 'app-signup-form',
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.scss',
})
export class SignupForm {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly signupApi = inject(SignupApi);
  readonly submissionState = signal<SubmissionState>('idle');

  readonly form = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(50)]],
    lastName: ['', [Validators.required, Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload: SignupPayload = this.form.getRawValue();

    this.submissionState.set('submitting');

    this.signupApi.submitSignup(payload).subscribe({
      next: () => {
        this.submissionState.set('success');
        this.form.reset();
      },
      error: () => {
        this.submissionState.set('error');
      },
    });
  }

  resetForm(): void {
    this.form.reset({
      firstName: '',
      lastName: '',
      email: '',
    });

    this.submissionState.set('idle');
  }
}
