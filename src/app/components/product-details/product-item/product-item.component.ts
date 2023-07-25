import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/shared/interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  product!: IProduct;
  productSubscription!: Subscription;
  inputQuantity: number = 1;

  constructor(private activatedRoute: ActivatedRoute,
    private cartService: CartService) {}

  ngOnInit(): void {
    this.productSubscription = this.activatedRoute.data.subscribe((data) => {
      this.product = data['data'];
    })
  }

  ngOnDestroy() {
    if (this.productSubscription) this.productSubscription.unsubscribe();
  }

  onQuantityChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.inputQuantity = Number(inputElement.value);
  }
  
  addToCart(product: IProduct): void {
    this.cartService.addToCart(product, this.inputQuantity);
  }
}
