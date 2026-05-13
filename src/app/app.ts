import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupForm } from './features/signup/signup-form/signup-form';

@Component({
  selector: 'app-root',
  imports: [SignupForm],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('tarek-hojeiri-uie-signup-form');
}
