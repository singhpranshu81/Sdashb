import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
})
export class ContactUsComponent {
  phone: string = '';
  orderId: string = '';
  message: string = '';

  // You can add a method to handle the form submission if needed
  onSubmit() {
    console.log('Phone:', this.phone);
    console.log('Order ID:', this.orderId);
    console.log('Message:', this.message);
  }
}
