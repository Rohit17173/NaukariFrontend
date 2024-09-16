import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecruterComponent } from './addrecruter.component';

describe('AddrecruterComponent', () => {
  let component: AddrecruterComponent;
  let fixture: ComponentFixture<AddrecruterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddrecruterComponent]
    });
    fixture = TestBed.createComponent(AddrecruterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
