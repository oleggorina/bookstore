import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AboutComponent } from './pages/about/about.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ChangelogComponent } from './pages/changelog/changelog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StoreComponent } from './pages/store/store.component';
import { productResolver } from './services/product.resolver';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'changelog', component: ChangelogComponent},
  {path: 'store', component: StoreComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent, resolve: {data: productResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
