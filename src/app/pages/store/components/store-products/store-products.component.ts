import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/product.class';
import { PRODUCT_DATA } from 'src/app/shared/product.const';

@Component({
  selector: 'app-store-products',
  templateUrl: './store-products.component.html',
  styleUrls: ['./store-products.component.scss']
})
export class StoreProductsComponent {
  product: IProduct[] = PRODUCT_DATA;
  flag: boolean = false;
  
}
