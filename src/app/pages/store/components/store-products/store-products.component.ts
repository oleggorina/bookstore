import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/shared/product.class';
import { PRODUCT_DATA } from 'src/app/shared/product.const';

@Component({
  selector: 'app-store-products',
  templateUrl: './store-products.component.html',
  styleUrls: ['./store-products.component.scss']
})
export class StoreProductsComponent implements OnInit {
  products: IProduct[] = [];
  productsSubscription!: Subscription;

  constructor(private productsService: ProductsService,
    private cartService: CartService) {
  }

  ngOnInit(): void {
    this.productsSubscription = this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }

  ngOnDestroy() {
    if (this.productsSubscription) this.productsSubscription.unsubscribe();
  }

  addToCart(product: IProduct): void {
    this.cartService.addToCart(product);
  }
  
}
