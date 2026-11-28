
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders {

  orders = [
    {
      id: 'FC1001',
      date: '2026-11-20',
      items: 3,
      total: 18000,
      payment: 'Credit / Debit Card',
      status: 'Delivered'
    },
    {
      id: 'FC1002',
      date: '2026-11-22',
      items: 5,
      total: 27500,
      payment: 'Bank Transfer',
      status: 'Processing'
    },
    {
      id: 'FC1003',
      date: '2026-11-24',
      items: 2,
      total: 12500,
      payment: 'Cash on Delivery',
      status: 'Shipped'
    }
  ];

  getStatusClass(status: string): string {
    switch (status) {
      case 'Delivered':
        return 'delivered';
      case 'Processing':
        return 'processing';
      case 'Shipped':
        return 'shipped';
      default:
        return '';
    }
  }

  getDeliveredCount(): number {
    return this.orders.filter(
      order => order.status === 'Delivered'
    ).length;
  }

  getActiveCount(): number {
    return this.orders.filter(
      order =>
        order.status === 'Processing' ||
        order.status === 'Shipped'
    ).length;
  }

  viewOrder(orderId: string): void {
    alert('Order details for ' + orderId);
  }
}
