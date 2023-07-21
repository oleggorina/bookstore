import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { IArticle } from '../shared/interface';
import { ArticlesService } from './articles.service';

export const articleResolver: ResolveFn<IArticle> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(ArticlesService).getArticle(Number(route.paramMap.get('id')));
};
