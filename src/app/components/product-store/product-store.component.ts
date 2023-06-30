import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.scss']
})
export class ProductStoreComponent {
  @Input() productTitle: string = '';
  @Input() productImage: string = '';
  @Input() productPrice: number = 0;
  @Input() productDescr: string = '';
  @Input() productType: string = '';
  @Input() classType: string = '';
  @Input() productID: number = 0;
}
