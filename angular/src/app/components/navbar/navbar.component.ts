import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public visible = false;
  public token: any = localStorage.getItem('token');
  public assets: any;
  public cartItems: any = null;
  navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'COLLECTION', path: '/collection' },
    { label: 'ABOUT', path: '/about' },
    { label: 'CONTACT', path: '/contact' },
  ];

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.token$.subscribe((token: any) => {
      this.token = token;
    });
    this.apiService.cartItems$.subscribe(
      (item: any) => (this.cartItems = item)
    );
  }

  toggleSidebar() {
    this.visible = !this.visible;
  }

  onSearchClick() {
    this.router.navigate(['/collection']);
    this.apiService.showSearchbar$.next(true);
  }

  onProfileClick() {
    if (!this.token) {
      this.router.navigate(['/login']);
    }
  }

  navigateToOrders() {
    this.router.navigate(['/orders']);
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
    this.apiService.token$.next(null);
    this.router.navigate(['/login']);
  }
}
