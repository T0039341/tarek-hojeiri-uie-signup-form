import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { vi } from 'vitest';

import { SignupApi } from '../../../core/services/signup-api';
import { SignupForm } from './signup-form';

describe('SignupForm', () => {
  let component: SignupForm;
  let fixture: ComponentFixture<SignupForm>;

  const signupApiMock = {
    submitSignup: vi.fn(),
  };

  beforeEach(async () => {
    signupApiMock.submitSignup.mockReturnValue(of({}));

    await TestBed.configureTestingModule({
      imports: [SignupForm],
      providers: [
        {
          provide: SignupApi,
          useValue: signupApiMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SignupForm);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make the form invalid when empty', () => {
    expect(component.form.invalid).toBeTruthy();
  });

  it('should make the form valid when all fields are valid', () => {
    component.form.setValue({
      firstName: 'Tarek',
      lastName: 'Hojeiri',
      email: 'tarek@example.com',
    });

    expect(component.form.valid).toBeTruthy();
  });

  it('should make the form invalid when email format is invalid', () => {
    component.form.patchValue({
      firstName: 'Tarek',
      lastName: 'Hojeiri',
      email: 'not-an-email',
    });

    expect(component.form.invalid).toBeTruthy();
    expect(component.form.controls.email.hasError('email')).toBeTruthy();
  });

  it('should submit form when valid', () => {
    component.form.setValue({
      firstName: 'Tarek',
      lastName: 'Hojeiri',
      email: 'tarek@example.com',
    });

    component.onSubmit();

    expect(signupApiMock.submitSignup).toHaveBeenCalled();
    expect(signupApiMock.submitSignup).toHaveBeenCalledWith({
      firstName: 'Tarek',
      lastName: 'Hojeiri',
      email: 'tarek@example.com',
    });
  });
});
