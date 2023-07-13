import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SocialIconComponent } from './components/social-icon/social-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartComponent } from './components/cart/cart.component';
import { BtnAccentComponent } from './components/btn-accent/btn-accent.component';
import { BtnPrimaryComponent } from './components/btn-primary/btn-primary.component';
import { BurgerComponent } from './components/burger/burger.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ProductComponent } from './components/product/product.component';
import { StyleComponent } from './pages/style/style.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ChangelogComponent } from './pages/changelog/changelog.component';
import { HeroComponent } from './pages/home/components/hero/hero.component';
import { BooksComponent } from './pages/home/components/books/books.component';
import { TitleComponent } from './components/title/title.component';
import { AuthorComponent } from './pages/home/components/author/author.component';
import { TrustedComponent } from './components/trusted/trusted.component';
import { CalloutComponent } from './pages/home/components/callout/callout.component';
import { LearnComponent } from './pages/home/components/learn/learn.component';
import { ChapterComponent } from './pages/home/components/chapter/chapter.component';
import { TestimonialComponent } from './pages/home/components/testimonial/testimonial.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { ReviewComponent } from './pages/home/components/testimonial/review/review.component';
import { BlogComponent } from './pages/home/components/blog/blog.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { LinkComponent } from './components/link/link.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutAuthorComponent } from './pages/about/components/about-author/about-author.component';
import { AboutStoryComponent } from './pages/about/components/about-story/about-story.component';
import { AboutBooksComponent } from './pages/about/components/about-books/about-books.component';
import { StoreComponent } from './pages/store/store.component';
import { StoreProductsComponent } from './pages/store/components/store-products/store-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductItemComponent } from './components/product-details/product-item/product-item.component';
import { ProductDescriptionComponent } from './components/product-details/product-description/product-description.component';
import { FeaturesComponent } from './components/product-details/features/features.component';
import { ArticleDetailsComponent } from './pages/articles/components/article-details/article-details.component';
import { QuoteComponent } from './pages/articles/components/quote/quote.component';
import { ArticleFilterComponent } from './pages/articles/components/article-filter/article-filter.component';
import { NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './pages/contact/components/contact-form/contact-form.component';
import { ContactQuestionsComponent } from './pages/contact/components/contact-questions/contact-questions.component';
import { CartWindowComponent } from './components/cart/components/cart-window/cart-window.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SocialIconComponent,
    CartComponent,
    BtnAccentComponent,
    BtnPrimaryComponent,
    BurgerComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ArticlesComponent,
    ProductComponent,
    StyleComponent,
    NotFoundComponent,
    LogInComponent,
    ChangelogComponent,
    HeroComponent,
    BooksComponent,
    TitleComponent,
    AuthorComponent,
    TrustedComponent,
    CalloutComponent,
    LearnComponent,
    ChapterComponent,
    TestimonialComponent,
    RatingsComponent,
    ReviewComponent,
    BlogComponent,
    ArticleCardComponent,
    LinkComponent,
    SubscribeComponent,
    FooterComponent,
    BannerComponent,
    AboutAuthorComponent,
    AboutStoryComponent,
    AboutBooksComponent,
    StoreComponent,
    StoreProductsComponent,
    ProductDetailsComponent,
    ProductItemComponent,
    ProductDescriptionComponent,
    FeaturesComponent,
    ArticleDetailsComponent,
    QuoteComponent,
    ArticleFilterComponent,
    ContactFormComponent,
    ContactQuestionsComponent,
    CartWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
