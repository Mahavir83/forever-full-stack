import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPolicyComponent } from './our-policy.component';

describe('OurPolicyComponent', () => {
  let component: OurPolicyComponent;
  let fixture: ComponentFixture<OurPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurPolicyComponent]
    });
    fixture = TestBed.createComponent(OurPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
