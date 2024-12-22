import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  constructor(
    private apiService: ApiService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  public currency = '$';
  public orderData: any = [];

  ngOnInit() {
    this.apiService.getOrders().subscribe(
      (data: any) => {
        if (data.success) {
          let orders: any = [];
          data.orders.map((order: any) => {
            order.items.map((cart: any) => {
              cart['status'] = order.status;
              cart['payment'] = order.payment;
              cart['paymentMethod'] = order.paymentMethod;
              cart['date'] = order.date;
              orders.push(cart);
            });
          });
          this.orderData = orders;
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
