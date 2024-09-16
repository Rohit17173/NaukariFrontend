import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruterloginComponent } from './recruterlogin.component';

describe('RecruterloginComponent', () => {
  let component: RecruterloginComponent;
  let fixture: ComponentFixture<RecruterloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruterloginComponent]
    });
    fixture = TestBed.createComponent(RecruterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
