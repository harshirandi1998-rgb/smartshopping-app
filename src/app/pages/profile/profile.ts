
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  isEditing = false;

  profile = {
    fullName: 'FreshCart Customer',
    email: 'customer@example.com',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  };

  originalProfile = { ...this.profile };

  currentPassword = '';
  newPassword = '';
  confirmPassword = '';

  constructor(private router: Router) {}

  editProfile(): void {
    this.originalProfile = { ...this.profile };
    this.isEditing = true;
  }

  saveProfile(): void {
    if (
      !this.profile.fullName.trim() ||
      !this.profile.email.trim()
    ) {
      alert('Please enter your name and email address.');
      return;
    }

    if (!this.profile.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    this.originalProfile = { ...this.profile };
    this.isEditing = false;

    alert('Profile updated successfully!');
  }

  cancelEdit(): void {
    this.profile = { ...this.originalProfile };
    this.isEditing = false;
  }

  changePassword(): void {
    if (
      !this.currentPassword ||
      !this.newPassword ||
      !this.confirmPassword
    ) {
      alert('Please complete all password fields.');
      return;
    }

    if (this.newPassword.length < 6) {
      alert('New password must contain at least 6 characters.');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      alert('New passwords do not match.');
      return;
    }

    alert('Password change is a frontend demo. Backend authentication is not connected yet.');

    this.currentPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }

  logout(): void {
    const confirmLogout = confirm('Are you sure you want to log out?');

    if (confirmLogout) {
      this.router.navigate(['/login']);
    }
  }
}
