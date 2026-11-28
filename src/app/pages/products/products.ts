
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  searchText = '';
  selectedCategory = 'All';

  categories = [
    'All',
    'Fruits',
    'Vegetables',
    'Dairy',
    'Bakery',
    'Meat',
    'Beverages'
  ];

  products = [
    {
      id: 1,
      name: 'Fresh Red Apples',
      category: 'Fruits',
      price: 4500,
      oldPrice: 5500,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500',
      description: 'Fresh and juicy red apples.'
    },
    {
      id: 2,
      name: 'Fresh Broccoli',
      category: 'Vegetables',
      price: 3200,
      oldPrice: 4000,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500',
      description: 'Healthy and fresh green broccoli.'
    },
    {
      id: 3,
      name: 'Fresh Milk',
      category: 'Dairy',
      price: 2800,
      oldPrice: 3500,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500',
      description: 'Fresh milk for your everyday needs.'
    },
    {
      id: 4,
      name: 'Fresh Strawberries',
      category: 'Fruits',
      price: 5500,
      oldPrice: 6500,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500',
      description: 'Sweet and delicious fresh strawberries.'
    },
    {
      id: 5,
      name: 'Fresh Carrots',
      category: 'Vegetables',
      price: 2500,
      oldPrice: 3000,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500',
      description: 'Crunchy carrots for healthy meals.'
    },
    {
      id: 6,
      name: 'Fresh Bread',
      category: 'Bakery',
      price: 3500,
      oldPrice: 4200,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500',
      description: 'Soft and freshly baked bread.'
    },
    {
      id: 7,
      name: 'Fresh Chicken',
      category: 'Meat',
      price: 8500,
      oldPrice: 9500,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500',
      description: 'Quality chicken for your meals.'
    },
    {
      id: 8,
      name: 'Orange Juice',
      category: 'Beverages',
      price: 4000,
      oldPrice: 4800,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500',
      description: 'Refreshing orange juice.'
    }
  ];

  get filteredProducts() {
    return this.products.filter(product => {
      const matchesCategory =
        this.selectedCategory === 'All' ||
        product.category === this.selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(
          this.searchText.toLowerCase()
        );

      return matchesCategory && matchesSearch;
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  addToCart(productName: string): void {
    alert(productName + ' added to your cart!');
  }
}
