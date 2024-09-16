import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcompjobComponent } from './viewcompjob.component';

describe('ViewcompjobComponent', () => {
  let component: ViewcompjobComponent;
  let fixture: ComponentFixture<ViewcompjobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcompjobComponent]
    });
    fixture = TestBed.createComponent(ViewcompjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
