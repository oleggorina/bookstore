import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faRectangleXmark } from '@fortawesome/free-regular-svg-icons';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ICartItem, IProduct } from 'src/app/shared/interface';

@Component({
  selector: 'app-cart-window',
  templateUrl: './cart-window.component.html',
  styleUrls: ['./cart-window.component.scss']
})
export class CartWindowComponent implements OnInit {
  xMark = faRectangleXmark;
  @Input() isActive: boolean = true;
  @Output() updatedIsActive = new EventEmitter<boolean>();
  cartItems: ICartItem[] = [];
  cartSubscription!: Subscription;
  cartTotal: number = 0;
  cartTotalSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.cartSubscription = this.cartService.cartItemsChanged.subscribe((data) => {
      this.cartItems = data;
    });
    this.calculateCartTotal();
    this.cartTotalSubscription = this.cartService.cartTotal.subscribe((total) => {
      this.cartTotal = total;
    })
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
    this.cartTotalSubscription.unsubscribe();
  }

  private calculateCartTotal(): void {
    this.cartTotal = this.cartService.getCartTotal();
  }

  getItemQuantity(item: ICartItem | null): number {
    return item?.quantity || 0;
  }

  updateCartItemQuantity(index: number): void {
    if (index >= 0 && index < this.cartItems.length) {
      const newQuantity = this.cartItems[index].quantity;
      if (newQuantity >= 1) {
        this.cartService.updateCartItemQuantity(this.cartItems[index].product.id, newQuantity);
        this.cartService.saveCartToLocalStorage();
        this.calculateCartTotal();
      }
    }
  }

  updateFlag(): void {
    this.isActive = false;
    this.updatedIsActive.emit(this.isActive);
  }

  removeItem(index: number): void {
    if (index >=0 && index < this.cartItems.length) {
      this.cartService.removeItemFromCart(index);
    }
  }

}
