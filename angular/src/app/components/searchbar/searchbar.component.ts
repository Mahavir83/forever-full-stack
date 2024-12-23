import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  public search: string = '';
  public showSearch: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.showSearchbar$.subscribe((val: any) => {
      this.showSearch = val;
    });
  }

  setShowSearch() {
    this.showSearch = false;
  }

  handleSetSearchValue() {
    this.apiService.searchValue$.next(this.search);
  }
}
