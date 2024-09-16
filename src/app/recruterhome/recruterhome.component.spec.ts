import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruterhomeComponent } from './recruterhome.component';

describe('RecruterhomeComponent', () => {
  let component: RecruterhomeComponent;
  let fixture: ComponentFixture<RecruterhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruterhomeComponent]
    });
    fixture = TestBed.createComponent(RecruterhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
