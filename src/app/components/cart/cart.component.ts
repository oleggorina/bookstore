import { Component, OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/shared/product.class';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: IProduct[] = [];
  icon = faCartShopping;
  cartBadge = this.cartItems.length;
  isActive: boolean = false;
  
  cartSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.cartBadge
  }

  toggleCartWindow(): void {
    this.isActive = true;
  }

  handleFlagUpdated(updatedFlag: boolean): void {
    this.isActive = updatedFlag;
  }
}
