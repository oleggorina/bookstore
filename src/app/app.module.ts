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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SocialIconComponent,
    CartComponent,
    BtnAccentComponent,
    BtnPrimaryComponent,
    BurgerComponent
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
