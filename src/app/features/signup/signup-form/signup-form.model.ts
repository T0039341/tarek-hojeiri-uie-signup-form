export interface SignupPayload {
  firstName: string;
  lastName: string;
  email: string;
}

export type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';
