import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  metrics = {
    totalOrders: 100,
    totalCustomers: 50,
    totalRevenue: 2000,
    totalDeliveries: 75,
  };

  targetOrders = 150; // Define your target orders here

  recentOrders = [
    { id: 1, customer: 'John Doe', amount: 20, status: 'Delivered' },
    { id: 2, customer: 'Jane Smith', amount: 15, status: 'Pending' },
    { id: 3, customer: 'Bob Johnson', amount: 30, status: 'Cancelled' },
    { id: 4, customer: 'Alice Brown', amount: 25, status: 'Delivered' },
    { id: 5, customer: 'Mike Wilson', amount: 10, status: 'Pending' },
    { id: 6, customer: 'Sara Connor', amount: 40, status: 'Delivered' },
  ];

  ngOnInit() {
    // Any initialization logic can go here
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Delivered':
        return 'green'; // Green for delivered
      case 'Pending':
        return 'orange'; // Orange for pending
      case 'Cancelled':
        return 'red'; // Red for cancelled
      default:
        return 'black'; // Default color for unknown status
    }
  }

  getStatusSymbol(status: string): string {
    switch (status) {
      case 'Delivered':
        return '✅'; // Checkmark for delivered
      case 'Pending':
        return '⏳'; // Hourglass for pending
      case 'Cancelled':
        return '❌'; // Cross for cancelled
      default:
        return ''; // No symbol for unknown status
    }
  }
}
