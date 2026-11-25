
import { Routes } from '@angular/router';

export const routes: Routes = [

  // Default page
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // Login
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then(m => m.Login),
    title: 'Login | FreshCart'
  },

  // Register
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register').then(m => m.Register),
    title: 'Register | FreshCart'
  },

  // Home
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
    title: 'Home | FreshCart'
  },

  // Products
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products').then(m => m.Products),
    title: 'Products | FreshCart'
  },

  // Product Details
  {
    path: 'product-details',
    loadComponent: () =>
      import('./pages/product-details/product-details')
        .then(m => m.ProductDetails),
    title: 'Product Details | FreshCart'
  },

  // Shopping Cart
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/cart').then(m => m.Cart),
    title: 'Shopping Cart | FreshCart'
  },

  // Checkout
  {
    path: 'checkout',
    loadComponent: () =>
      import('./pages/checkout/checkout').then(m => m.Checkout),
    title: 'Checkout | FreshCart'
  },

  // Profile
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile').then(m => m.Profile),
    title: 'My Profile | FreshCart'
  },

  // Orders
  {
    path: 'orders',
    loadComponent: () =>
      import('./pages/orders/orders').then(m => m.Orders),
    title: 'My Orders | FreshCart'
  },

  // Unknown routes
  {
    path: '**',
    redirectTo: 'login'
  }

];
