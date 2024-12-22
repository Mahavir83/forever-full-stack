import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductComponent } from 'src/app/pages/product/product.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() id!: string;
  @Input() image!: any;
  @Input() name!: string;
  @Input() price!: number;

  public currency: string = '$';

  constructor(private router: Router) {}

  // Scroll to top function
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  // Navigate to the product detail page
  navigateToProduct(): void {
    this.router.navigate([`/product/${this.id}`]);
    this.scrollToTop();
  }
}
