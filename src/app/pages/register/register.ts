
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  fullName = '';
  email = '';
  phone = '';
  password = '';
  confirmPassword = '';

  showPassword = false;
  showConfirmPassword = false;

  constructor(private router: Router) {}

  register(): void {

    if (
      !this.fullName.trim() ||
      !this.email.trim() ||
      !this.phone.trim() ||
      !this.password ||
      !this.confirmPassword
    ) {
      alert('Please complete all fields.');
      return;
    }

    if (!this.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    if (this.password.length < 6) {
      alert('Password must contain at least 6 characters.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    alert('Registration successful! Please log in.');

    this.router.navigate(['/login']);
  }
}
