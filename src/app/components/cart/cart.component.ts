import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/shared/interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: IProduct[] = [];
  icon = faCartShopping;
  cartBadge = 0;
  isActive: boolean = false;
  
  cartSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItemsChanged.subscribe(() => {
      this.updateCartItemCount();
    });
    this.updateCartItemCount();
  }

  private updateCartItemCount(): void {
    this.cartBadge = this.cartService.getCartItemsCount();
  }

  toggleCartWindow(): void {
    this.isActive = true;
  }

  handleFlagUpdated(updatedFlag: boolean): void {
    this.isActive = updatedFlag;
  }
}
