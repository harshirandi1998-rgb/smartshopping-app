
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  categories = [
    { name: 'Fruits', icon: '🍎' },
    { name: 'Vegetables', icon: '🥦' },
    { name: 'Dairy', icon: '🥛' },
    { name: 'Bakery', icon: '🍞' },
    { name: 'Meat', icon: '🍗' },
    { name: 'Beverages', icon: '🥤' }
  ];

 products = [
  {
    id: 1,
    name: 'Fresh Red Apples',
    category: 'Fruits',
    price: 4500,
    unit: '1 kg',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Fresh Broccoli',
    category: 'Vegetables',
    price: 3200,
    unit: '1 kg',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500',
    rating: 4.7
  },
  {
    id: 3,
    name: 'Fresh Milk',
    category: 'Dairy',
    price: 2800,
    unit: '1 litre',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500',
    rating: 4.9
  },
  {
    id: 4,
    name: 'Fresh Strawberries',
    category: 'Fruits',
    price: 5500,
    unit: '500 g',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500',
    rating: 4.8
  }
];

  addToCart(product: any) {
    alert(product.name + ' will be added to your cart when we connect the shopping cart.');
  }

}

