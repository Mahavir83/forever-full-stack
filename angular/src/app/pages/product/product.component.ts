import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { environment } from '../../../environments/environment';
import { Location } from '@angular/common';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  public productData: any;
  public products: any;
  public category: any;
  public subCategory: any;
  public image: any;
  public size: any;
  public currency = '$';
  private lastUrl: string = '';
  public cartItems: number = 0;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private location: Location,
    private toaster: ToastrService
  ) {}

  ngOnInit() {
    this.handleProduct();
    this.apiService.cartItems$.subscribe(
      (item: any) => (this.cartItems = item ?? 0)
    );
  }

  ngAfterViewChecked() {
    const currentUrl = this.location.path();
    if (currentUrl !== this.lastUrl) {
      this.lastUrl = currentUrl;
      this.handleProduct();
    }
  }

  handleProduct() {
    const productId = this.route.snapshot.params['productId'];
    this.apiService.getProduct(productId!).subscribe(
      (data: any) => {
        this.productData = data.product;
        this.image = data.product.image[0];
      },
      (error: any) => {
        console.error('Error fetching posts:', error);
      }
    );
    this.apiService.getProducts().subscribe(
      (data: any) => {
        this.products = data.products.filter((item: any) => {
          if (
            this.category == item.category &&
            this.subCategory === item.subCategory
          ) {
            return item;
          }
        });
      },
      (error: any) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  setImage(item: string): void {
    this.image = item;
  }

  setSize(item: string): void {
    this.size = item;
  }

  addToCart(id: string, size: string): void {
    this.size = size;
    this.apiService.addProductToCart(id, size).subscribe(
      (data: any) => {
        if (data.success) {
          this.toaster.success(data.message);
          this.apiService.cartItems$.next(this.cartItems + 1);
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
