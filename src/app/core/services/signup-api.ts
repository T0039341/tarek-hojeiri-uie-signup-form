import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupPayload } from '../../features/signup/signup-form/signup-form.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignupApi {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/signups`;

  submitSignup(payload: SignupPayload): Observable<SignupPayload> {
    return this.http.post<SignupPayload>(this.apiUrl, payload);
  }
}
