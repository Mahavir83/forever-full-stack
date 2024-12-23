import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLetterBoxComponent } from './news-letter-box.component';

describe('NewsLetterBoxComponent', () => {
  let component: NewsLetterBoxComponent;
  let fixture: ComponentFixture<NewsLetterBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsLetterBoxComponent]
    });
    fixture = TestBed.createComponent(NewsLetterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
