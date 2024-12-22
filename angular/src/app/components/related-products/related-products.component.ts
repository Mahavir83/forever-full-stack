import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css'],
})
export class RelatedProductsComponent {
  @Input() category: any;
  @Input() subCategory: any;
  public products: any = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
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
}
