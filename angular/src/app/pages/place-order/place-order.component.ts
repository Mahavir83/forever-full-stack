import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css'],
})
export class PlaceOrderComponent {
  formData: FormGroup;
  method: string = 'stripe';
  assets = {
    stripe_logo: 'path-to-stripe-logo.png',
  };

  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: [''],
      zipcode: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  onSubmit() {
    this.formData;
  }

  setMethod(method: string) {
    this.method = method;
  }
}
