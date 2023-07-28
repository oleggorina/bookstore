import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() productTitle: string = '';
  @Input() productImage: string = '';
  @Input() productPrice: number = 0;
  @Input() productDescr: string = '';
  @Input() productType: string = '';
  @Input() productId: number = 0;
}
