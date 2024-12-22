import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { PlaceOrderComponent } from './pages/place-order/place-order.component';
import { ProductComponent } from './pages/product/product.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { CartTotalComponent } from './components/cart-total/cart-total.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { LatestCollectionComponent } from './components/latest-collection/latest-collection.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsLetterBoxComponent } from './components/news-letter-box/news-letter-box.component';
import { OurPolicyComponent } from './components/our-policy/our-policy.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { RelatedProductsComponent } from './components/related-products/related-products.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { TitleComponent } from './components/title/title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './components/loader/loader.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CartComponent,
    CollectionComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    OrdersComponent,
    PlaceOrderComponent,
    ProductComponent,
    VerifyComponent,
    BestSellerComponent,
    CartTotalComponent,
    FooterComponent,
    HeroComponent,
    LatestCollectionComponent,
    NavbarComponent,
    NewsLetterBoxComponent,
    OurPolicyComponent,
    ProductItemComponent,
    RelatedProductsComponent,
    SearchbarComponent,
    TitleComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
