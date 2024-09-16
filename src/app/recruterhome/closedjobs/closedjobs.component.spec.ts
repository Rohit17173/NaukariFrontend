import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedjobsComponent } from './closedjobs.component';

describe('ClosedjobsComponent', () => {
  let component: ClosedjobsComponent;
  let fixture: ComponentFixture<ClosedjobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClosedjobsComponent]
    });
    fixture = TestBed.createComponent(ClosedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
