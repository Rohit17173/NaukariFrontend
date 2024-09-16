import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivejobsComponent } from './activejobs.component';

describe('ActivejobsComponent', () => {
  let component: ActivejobsComponent;
  let fixture: ComponentFixture<ActivejobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivejobsComponent]
    });
    fixture = TestBed.createComponent(ActivejobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
