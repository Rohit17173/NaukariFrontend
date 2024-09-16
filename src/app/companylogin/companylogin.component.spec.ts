import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyloginComponent } from './companylogin.component';

describe('CompanyloginComponent', () => {
  let component: CompanyloginComponent;
  let fixture: ComponentFixture<CompanyloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyloginComponent]
    });
    fixture = TestBed.createComponent(CompanyloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
