import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct, ICartItem } from '../shared/interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: ICartItem[] = [];
  cartItemsChanged = new Subject<ICartItem[]>();
  itemRemoved = new Subject<void>();
  cartTotalSubject = new Subject<number>();
  cartTotal = this.cartTotalSubject.asObservable();

  constructor() {
    this.loadCartFromLocalStorage();
  }

  private loadCartFromLocalStorage(): void {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cartItems = JSON.parse(cartData);
    } else {
      this.cartItems = [];
    }
  }

  private saveCartToLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  private calculateSubtotal(item: ICartItem): number {
    return item.product.price * item.quantity;
  }

  private updateCartTotal(): void {
    const total = this.getCartTotal();
    this.cartTotalSubject.next(total);
  }

  getCartTotal(): number {
    let total = 0;
    for (const item of this.cartItems) {
      total += this.calculateSubtotal(item);
    }
    return total;
  }
  
  addToCart(item: IProduct): void {
    let existingItemIndex = -1;

    for(let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].product.id === item.id) {
        existingItemIndex = i;
        break;
      }
    }

    if (existingItemIndex !== -1) {
      this.cartItems[existingItemIndex].quantity += 1;
      console.log('Existing item:', this.cartItems[existingItemIndex]);
    } else {
      this.cartItems.push({product: item, quantity: 1});
      console.log('New item:', item);
    }

    this.updateCartTotal();
    this.cartItemsChanged.next(this.cartItems);
    this.saveCartToLocalStorage();
    console.log('Updated cart:', this.cartItems);
  }

  getCartItems() {
    return this.cartItems;
  }

  updateCartItemQuantity(productId: number, quantity: number): void {
    const existingItem = this.cartItems.find((cartItem) => {
      cartItem.product.id === productId;
    });

    if (existingItem) {
      existingItem.quantity = quantity;
      this.cartItemsChanged.next(this.cartItems);
      this.saveCartToLocalStorage();
    }
  }

  removeItemFromCart(index: number): void {
    if (index >= 0 && index < this.cartItems.length) {
      this.cartItems.splice(index, 1);
      this.cartItemsChanged.next(this.cartItems);
      this.saveCartToLocalStorage();
      this.updateCartTotal();
    }
  }

  getCartItemsCount(): number {
    return  this.cartItems.length;
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartItemsChanged.next(this.cartItems);
    localStorage.removeItem('cart');
  }
}
