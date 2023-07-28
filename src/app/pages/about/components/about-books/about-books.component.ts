import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArrayFilterService } from 'src/app/services/array-filter.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/shared/interface';
import { PRODUCT_DATA } from 'src/app/shared/product.const';

@Component({
  selector: 'app-about-books',
  templateUrl: './about-books.component.html',
  styleUrls: ['./about-books.component.scss']
})
export class AboutBooksComponent implements OnInit, OnDestroy {
 productData: IProduct[] = [];
 productSubscription!: Subscription;
 selectedItem: string = 'Printed Book';

 sortedData: any[] = [];
 constructor(private arrayFilterService: ArrayFilterService,
  private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.productSubscription = this.productService.getProducts().subscribe((data) => {
      this.productData = data;
      this.sortedData = this.arrayFilterService.filterArray(this.productData, this.selectedItem);
      console.log(this.sortedData)
    });
  }

  ngOnDestroy(): void {
    if(this.productSubscription) this.productSubscription.unsubscribe();
  }
 
}
