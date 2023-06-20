import { Component } from '@angular/core';
import { ArrayFilterService } from 'src/app/services/array-filter.service';
import { IProduct } from 'src/app/shared/product.class';
import { PRODUCT_DATA } from 'src/app/shared/product.const';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  productData: IProduct[] = PRODUCT_DATA;
  selectedItem: string = 'Printed Book';
  sortedData: any[] = [];

  constructor(private arrayFilterService: ArrayFilterService) {
    this.sortedData = this.arrayFilterService.filterArray(this.productData, this.selectedItem);
   }
}
