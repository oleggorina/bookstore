import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject, Subscription } from 'rxjs';
import { IProduct } from '../shared/product.class';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit, OnDestroy {

  private cartItems: IProduct[] = [];
  cartItemsChanged = new Subject<IProduct[]>();
  itemRemoved = new Subject<void>();
  private cartSubscription!: Subscription;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.loadCartFromCookie();
    this.cartSubscription = this.cartItemsChanged.subscribe( () => {
      this.saveCartToCookie();
    })

    console.log(this.itemRemoved)
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  private loadCartFromCookie(): void {
    const cartData = this.cookieService.get('cart');
    if (cartData) this.cartItems = JSON.parse(cartData)
  }

  private saveCartToCookie(): void {
    this.cookieService.set('cart', JSON.stringify(this.cartItems));
  }
  
  addToCart(item: IProduct): void {
    this.cartItems.push(item);
    this.cookieService.set('cart', JSON.stringify(this.cartItems));
    this.cartItemsChanged.next(this.cartItems);
    console.log("Add")
  }

  getCartItems() {
    const cartItems = this.cookieService.get('cart');
    return cartItems ? JSON.parse(cartItems) : [];
  }

  removeItemFromCart(index: number): void {
    this.cartItems.splice(index, 1);
    this.saveCartToCookie();
    this.cartItemsChanged.next(this.cartItems);
    this.itemRemoved.next();
    console.log("Remove")
  }

  clearCart(): void {
    this.cookieService.delete('cart');
  }
}
