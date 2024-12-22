import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  public cartItems: any = [];
  public cart: any;
  public formData: FormGroup;
  public method: string = 'stripe';
  public cartAmount = 0;
  public currency = '$';
  public delivery_fee = 10;

  constructor(
    private apiService: ApiService,
    private toaster: ToastrService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formData = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: [''],
      zipcode: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.apiService.getProductToCart().subscribe(
      (data: any) => {
        if (data.success) {
          this.cartItems = data.cartItems;
          this.cart = data.cart;
          this.apiService.cartItems$.next(data.cartItems.length);
          this.getCartAmount();
        } else {
          this.toaster.error(data.message);
        }
      },
      (error: any) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  onSubmit() {
    if (!this.formData.valid) {
      return;
    }
    let item = this.cartItems.map((item: any) => {
      return {
        ...item,
        quantity: this.getProductQuantity(item),
      };
    });
    let orderData = {
      address: this.formData.value,
      items: item,
      amount: this.cartAmount + this.delivery_fee,
    };
    if (this.method == 'stripe') {
      this.apiService.stripeOrderPlace(orderData).subscribe(
        (data: any) => {
          if (data.success) {
            window.location.replace(data.session_url);
          } else {
            this.toaster.error(data.message);
          }
        },
        (error: any) => {
          console.error('Error fetching posts:', error);
        }
      );
    } else {
      this.apiService.codOrderPlace(orderData).subscribe(
        (data: any) => {
          if (data.success) {
            this.toaster.success(data.message);
            this.router.navigate(['/orders']);
          } else {
            this.toaster.error(data.message);
          }
        },
        (error: any) => {
          console.error('Error fetching posts:', error);
        }
      );
    }
  }

  setMethod(method: string) {
    this.method = method;
  }

  getCartAmount() {
    let totalAmount = 0;
    this.cartItems.map((item: any) => {
      let itemQuantity = Object.values(this.cart[item._id]);
      if (itemQuantity.length > 0) {
        itemQuantity.map((quantity: any) => {
          totalAmount = totalAmount + item.price * quantity;
        });
      }
    });
    this.cartAmount = totalAmount;
  }

  handleChangeQuantity(event: any, product: any) {
    let size = Object.keys(this.cart[product._id])[0];
    this.cart = {
      ...this.cart,
      [product._id]: {
        [size]: Number(event.target.value),
      },
    };
    this.getCartAmount();
  }

  getProductSize(product: any) {
    return Object.keys(this.cart[product._id])[0];
  }

  getProductQuantity(product: any) {
    return Object.values(this.cart[product._id])[0];
  }
}
