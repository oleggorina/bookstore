import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../shared/product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url: string = 'https://bookstore-2b138-default-rtdb.europe-west1.firebasedatabase.app/Products';
  
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IProduct[]>(`${this.url}.json`)
  }

  getProduct(id: number) {
    return this.http.get<IProduct>(`${this.url}/${id}.json`);
  }
}
