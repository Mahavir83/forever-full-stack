import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  public token: any = localStorage.getItem('token');

  constructor(private apiService: ApiService) {
    this.apiService.token$.subscribe((token) => (this.token = token));
  }
}
