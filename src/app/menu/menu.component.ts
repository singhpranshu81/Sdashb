import { Component } from '@angular/core';
import { CartService } from '../cart.service';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
  discountApplied?: boolean; // Track if the discount has been applied
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items = [
    { name: 'Pizza', price: 110, image: 'assets/pizza.png', isVeg: false, discount: 10 },
    { name: 'Burger', price: 120, image: 'assets/burger.png', isVeg: false },
    { name: 'Chicken 65', price: 90, image: 'assets/chicken 65.png', isNonVeg: true, discount: 15 },
  ];

  bookmarkedItems: CartItem[] = [];

  constructor(public cartService: CartService) {}

  addToCart(itemName: string, itemPrice: number, change: number): void {
    if (change > 0) {
      this.cartService.addToCart({ name: itemName, price: itemPrice, quantity: change });
    } else {
      this.cartService.removeFromCart(itemName);
    }
  }

  getQuantity(itemName: string): number {
    const item = this.cartService.getCart().find(i => i.name === itemName);
    return item ? item.quantity : 0;
  }

  getTotal(): number {
    return this.cartService.getCart().reduce((total, item) => {
      return total + this.calculateTotalamount(item);
    }, 0);
  }

  calculateTotalamount(item: CartItem): number {
    const discountAmount = this.calculateAmount(item);
    return (item.price * item.quantity) - discountAmount;
  }

  calculateAmount(item: CartItem): number {
    return item.discount ? (item.price * (item.discount / 100) * item.quantity) : 0;
  }

  applyDiscount(item: CartItem): void {
    if (item.discount && !item.discountApplied) {
      const discountAmount = item.price * (item.discount / 100);
      item.price -= discountAmount; // Apply the discount to the original price
      item.discountApplied = true; // Mark as discount applied
    }
  }

  bookmarkItem(item: { name: string; price: number; discount?: number }): void {
    const bookmarkedItem: CartItem = {
      name: item.name,
      price: item.price,
      quantity: 1,
      discount: item.discount || 0,
      discountApplied: false // Initialize discount applied state
    };

    const index = this.bookmarkedItems.findIndex(i => i.name === bookmarkedItem.name);
    if (index > -1) {
      this.bookmarkedItems.splice(index, 1);
    } else {
      this.bookmarkedItems.push(bookmarkedItem);
    }
  }

  isBookmarked(item: { name: string }): boolean {
    return this.bookmarkedItems.some(i => i.name === item.name);
  }
}
