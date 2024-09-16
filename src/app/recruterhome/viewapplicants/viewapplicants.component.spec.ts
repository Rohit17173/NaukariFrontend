import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewapplicantsComponent } from './viewapplicants.component';

describe('ViewapplicantsComponent', () => {
  let component: ViewapplicantsComponent;
  let fixture: ComponentFixture<ViewapplicantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewapplicantsComponent]
    });
    fixture = TestBed.createComponent(ViewapplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
