import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css'],
})
export class BestSellerComponent {
  @Input() products: any;

  ngOnChanges() {
    this.products = this.products.slice(0, 5);
  }
}
