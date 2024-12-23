import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css'],
})
export class VerifyComponent {
  constructor(
    private apiService: ApiService,
    private toaster: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let status = this.route.snapshot.queryParamMap.get('success')!;
    let orderId = this.route.snapshot.queryParamMap.get('orderId')!;
    this.apiService.verifyOrder(orderId, status).subscribe(
      (data: any) => {
        if (data.success) {
          this.router.navigate(['/orders']);
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
