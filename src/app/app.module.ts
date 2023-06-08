import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { StoryComponent } from './pages/story/story.component';
import { ProductComponent } from './pages/product/product.component';
import { StyleComponent } from './pages/style/style.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ChangelogComponent } from './pages/changelog/changelog.component';
import { HeroComponent } from './pages/home/components/hero/hero.component';
import { BooksComponent } from './pages/home/components/books/books.component';
import { TitleComponent } from './components/title/title.component';
import { AuthorComponent } from './pages/home/components/author/author.component';
import { TrustedComponent } from './pages/home/components/trusted/trusted.component';
import { CalloutComponent } from './pages/home/components/callout/callout.component';
import { LearnComponent } from './pages/home/components/learn/learn.component';

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
    StoryComponent,
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
    LearnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
