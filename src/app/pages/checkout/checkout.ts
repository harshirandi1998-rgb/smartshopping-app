
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {

  customerName = '';
  email = '';
  phone = '';
  address = '';
  city = '';
  postalCode = '';

  paymentMethod = 'card';

  subtotal = 15000;
  deliveryFee = 3000;

  get total(): number {
    return this.subtotal + this.deliveryFee;
  }

  constructor(private router: Router) {}

  placeOrder() {
    if (
      !this.customerName.trim() ||
      !this.email.trim() ||
      !this.phone.trim() ||
      !this.address.trim() ||
      !this.city.trim() ||
      !this.postalCode.trim()
    ) {
      alert('Please complete all delivery information.');
      return;
    }

    if (!this.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Your demo order has been placed successfully!');

    this.router.navigate(['/orders']);
  }
}

