import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public BACKEND_URL = environment.BACKEND_URL;
  public headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token')!,
  });

  showSearchbar$ = new Subject();
  searchValue$ = new Subject();
  token$ = new Subject();
  cartItems$ = new Subject();

  getProducts() {
    return this.http.get(this.BACKEND_URL + '/api/product/list');
  }

  getProduct(productId: string) {
    return this.http.get(
      this.BACKEND_URL + '/api/product/single?productId=' + productId
    );
  }

  login(loginDetails: any) {
    return this.http.post(this.BACKEND_URL + '/api/user/login', loginDetails);
  }

  register(loginDetails: any) {
    return this.http.post(
      this.BACKEND_URL + '/api/user/register',
      loginDetails
    );
  }

  getProductToCart() {
    return this.http.post(
      this.BACKEND_URL + '/api/cart/get',
      {},
      { headers: this.headers }
    );
  }

  addProductToCart(itemId: string, size: string) {
    return this.http.post(
      this.BACKEND_URL + '/api/cart/add',
      { itemId, size },
      { headers: this.headers }
    );
  }

  stripeOrderPlace(orderData: any) {
    return this.http.post(this.BACKEND_URL + '/api/order/stripe', orderData, {
      headers: this.headers,
    });
  }

  codOrderPlace(orderData: any) {
    return this.http.post(this.BACKEND_URL + '/api/order/place', orderData, {
      headers: this.headers,
    });
  }

  getOrders() {
    return this.http.post(
      this.BACKEND_URL + '/api/order/userorders',
      {},
      { headers: this.headers }
    );
  }

  verifyOrder(orderId: string, status: string) {
    return this.http.post(
      this.BACKEND_URL + '/api/order/verifyStripe',
      { success: status, orderId: orderId },
      { headers: this.headers }
    );
  }
}
