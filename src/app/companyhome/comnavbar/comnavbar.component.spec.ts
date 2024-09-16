import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComnavbarComponent } from './comnavbar.component';

describe('ComnavbarComponent', () => {
  let component: ComnavbarComponent;
  let fixture: ComponentFixture<ComnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComnavbarComponent]
    });
    fixture = TestBed.createComponent(ComnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
