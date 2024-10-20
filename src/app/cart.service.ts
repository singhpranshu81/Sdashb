import { Injectable } from '@angular/core';

interface CartItem {
  name: string;
  price: number; // Original price
  quantity: number; 
  discount?: number; 
  discountApplied?: boolean; // Track if the discount has been applied
  // Optional discount property
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];

  addToCart(item: CartItem) {
    const existingItem = this.cart.find(i => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += item.quantity; // Update quantity if item exists
    } else {
      this.cart.push({ ...item }); // Add the item as is
    }
  }

  removeFromCart(itemName: string) {
    this.cart = this.cart.filter(item => item.name !== itemName);
  }

  
  
  getCart(): CartItem[] {
    return this.cart; // Ensure this is of type CartItem[]
  }
  

  getTotal(): number {
    return this.cart.reduce((total, item) => {
      const itemDiscount = item.discount ? (item.price * (item.discount / 100)) : 0;
      const itemTotalPrice = (item.price - itemDiscount) * item.quantity;
      return total + itemTotalPrice;
    }, 0);
  }

  calculateDiscountAmount(item: CartItem): number {
    return item.discount ? (item.price * (item.discount / 100) * item.quantity) : 0;
  }
}
