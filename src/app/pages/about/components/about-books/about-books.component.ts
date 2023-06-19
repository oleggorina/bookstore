import { Component } from '@angular/core';
import { IProduct } from 'src/app/shared/product.class';
import { PRODUCT_DATA } from 'src/app/shared/product.const';

@Component({
  selector: 'app-about-books',
  templateUrl: './about-books.component.html',
  styleUrls: ['./about-books.component.scss']
})
export class AboutBooksComponent {
 productData: IProduct[] = PRODUCT_DATA;
 selectedItem: string = 'Printed Book';

 sortedData: any[] = [];
 constructor() {
  this.sortedData = this.productData.filter(item => item.type === 'Printed Book');
 }
}
