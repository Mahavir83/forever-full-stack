import { Component } from '@angular/core';

@Component({
  selector: 'app-news-letter-box',
  templateUrl: './news-letter-box.component.html',
  styleUrls: ['./news-letter-box.component.css'],
})
export class NewsLetterBoxComponent {
  email: string = '';

  onSubmitHandler() {
    if (this.email) {
      alert(`You subscribed with email: ${this.email}`);
      this.email = ''; // Clear the email after submission
    }
  }
}
