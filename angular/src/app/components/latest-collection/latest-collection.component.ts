import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-latest-collection',
  templateUrl: './latest-collection.component.html',
  styleUrls: ['./latest-collection.component.css'],
})
export class LatestCollectionComponent {
  @Input() products: any;

  ngOnChanges() {
    this.products = this.products.slice(0, 10);
  }
}
