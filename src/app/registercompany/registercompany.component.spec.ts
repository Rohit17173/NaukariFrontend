import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercompanyComponent } from './registercompany.component';

describe('RegistercompanyComponent', () => {
  let component: RegistercompanyComponent;
  let fixture: ComponentFixture<RegistercompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistercompanyComponent]
    });
    fixture = TestBed.createComponent(RegistercompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
