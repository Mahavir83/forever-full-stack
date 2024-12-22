import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css'],
})
export class CartTotalComponent {
  @Input() cartItems: any;
  @Input() cart: any;

  public cartAmount = 0;
  public currency = '$';
  public delivery_fee = 10;

  ngOnInit() {}

  ngOnChanges(change: any) {
    if (change?.cartItems?.currentValue) {
      this.cartItems = change.cartItems.currentValue;
    }
    if (change?.cart?.currentValue) {
      this.cart = change.cart.currentValue;
    }
    this.getCartAmount();
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
}
