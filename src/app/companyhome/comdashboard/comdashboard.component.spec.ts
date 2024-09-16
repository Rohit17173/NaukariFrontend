import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComdashboardComponent } from './comdashboard.component';

describe('ComdashboardComponent', () => {
  let component: ComdashboardComponent;
  let fixture: ComponentFixture<ComdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComdashboardComponent]
    });
    fixture = TestBed.createComponent(ComdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
