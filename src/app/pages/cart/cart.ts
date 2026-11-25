
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  cartItems = [
    {
      id: 1,
      name: 'Fresh Red Apples',
      category: 'Fruits',
      price: 4500,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300'
    },
    {
      id: 2,
      name: 'Fresh Broccoli',
      category: 'Vegetables',
      price: 3200,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300'
    },
    {
      id: 3,
      name: 'Fresh Milk',
      category: 'Dairy',
      price: 2800,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300'
    }
  ];

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }

  get subtotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity, 0
    );
  }

  get deliveryFee(): number {
    return this.cartItems.length > 0 ? 3000 : 0;
  }

  get total(): number {
    return this.subtotal + this.deliveryFee;
  }
}
