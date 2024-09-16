import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrecruiterComponent } from './viewrecruiter.component';

describe('ViewrecruiterComponent', () => {
  let component: ViewrecruiterComponent;
  let fixture: ComponentFixture<ViewrecruiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewrecruiterComponent]
    });
    fixture = TestBed.createComponent(ViewrecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
