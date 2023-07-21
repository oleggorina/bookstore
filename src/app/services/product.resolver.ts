import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { IProduct } from '../shared/interface';
import { ProductsService } from './products.service';

export const productResolver: ResolveFn<IProduct> = (route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
  return inject(ProductsService).getProduct(Number(route.paramMap.get('id')));
};
