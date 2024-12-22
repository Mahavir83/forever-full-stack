import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent {
  public products: any = [];
  filterProducts: any[] = [];
  category: string[] = [];
  subCategory: string[] = [];
  sortType = 'relavent';
  search: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getProducts().subscribe(
      (data: any) => {
        this.products = data.products;
        this.applyFilter();
      },
      (error: any) => {
        console.error('Error fetching posts:', error);
      }
    );
    this.apiService.searchValue$.subscribe((val: any) => {
      this.search = val;
      this.applyFilter();
    });
  }

  toggleCategory(e: any) {
    if (this.category.includes(e.target.value)) {
      this.category = this.category.filter((item) => item !== e.target.value);
    } else {
      this.category = [...this.category, e.target.value];
    }
    this.applyFilter();
  }

  toggleSubCategory(e: any) {
    if (this.subCategory.includes(e.target.value)) {
      this.subCategory = this.subCategory.filter(
        (item) => item !== e.target.value
      );
    } else {
      this.subCategory = [...this.subCategory, e.target.value];
    }
    this.applyFilter();
  }

  applyFilter() {
    let productsCopy = [...this.products];

    if (this.search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }

    if (this.category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        this.category.includes(item.category)
      );
    }

    if (this.subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        this.subCategory.includes(item.subCategory)
      );
    }

    this.filterProducts = productsCopy;
  }

  sortProduct(event: any) {
    let fpCopy = [...this.filterProducts];
    this.sortType = event.target.value;
    switch (this.sortType) {
      case 'low-high':
        this.filterProducts = fpCopy.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        this.filterProducts = fpCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        this.applyFilter();
        break;
    }
  }
}
