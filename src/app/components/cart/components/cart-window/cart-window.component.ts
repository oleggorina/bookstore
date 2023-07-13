import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faRectangleXmark } from '@fortawesome/free-regular-svg-icons';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/shared/product.class';

@Component({
  selector: 'app-cart-window',
  templateUrl: './cart-window.component.html',
  styleUrls: ['./cart-window.component.scss']
})
export class CartWindowComponent implements OnInit {
  xMark = faRectangleXmark;
  @Input() isActive: boolean = true;
  @Output() updatedIsActive = new EventEmitter<boolean>();
  cartItems: IProduct[] = [];
  cartSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.cartSubscription = this.cartService.cartItemsChanged.subscribe((data) => {
      this.cartItems = data;
    })
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  updateFlag(): void {
    this.isActive = false;
    this.updatedIsActive.emit(this.isActive);
  }

  removeItem(index: number): void {
    this.cartService.removeItemFromCart(index);
  }

}
