import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { PlaceOrderComponent } from './pages/place-order/place-order.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  {
    path: 'collection',
    component: CollectionComponent,
    canActivate: [authGuard],
  },
  { path: 'about', component: AboutComponent, canActivate: [authGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [authGuard] },
  {
    path: 'product/:productId',
    component: ProductComponent,
    canActivate: [authGuard],
  },
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'place-order',
    component: PlaceOrderComponent,
    canActivate: [authGuard],
  },
  { path: 'orders', component: OrdersComponent, canActivate: [authGuard] },
  { path: 'verify', component: VerifyComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
