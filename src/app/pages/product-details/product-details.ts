
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

  product = {
    id: 1,
    name: 'Fresh Red Apples',
    category: 'Fruits',
    price: 4500,
    oldPrice: 5500,
    rating: 4.8,
    reviews: 125,
    stock: 'In Stock',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800',
    description: 'Enjoy fresh, juicy and delicious red apples. Carefully selected for quality and freshness, they are perfect for snacks, fruit salads and everyday meals.'
  };

  quantity = 1;

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  get totalPrice(): number {
    return this.product.price * this.quantity;
  }

  addToCart(): void {
    alert(
      this.quantity + ' x ' +
      this.product.name +
      ' added to your cart!'
    );
  }
}
