import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjobRecruterComponent } from './addjob-recruter.component';

describe('AddjobRecruterComponent', () => {
  let component: AddjobRecruterComponent;
  let fixture: ComponentFixture<AddjobRecruterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddjobRecruterComponent]
    });
    fixture = TestBed.createComponent(AddjobRecruterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
