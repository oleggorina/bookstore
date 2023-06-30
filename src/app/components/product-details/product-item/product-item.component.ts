import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { IProduct } from 'src/app/shared/product.class';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  product!: IProduct;
  productSubscription!: Subscription;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.productSubscription = this.activatedRoute.data.subscribe((data) => {
      this.product = data['data'];
    })
  }

  ngOnDestroy() {
    if (this.productSubscription) this.productSubscription.unsubscribe();
  }
}
