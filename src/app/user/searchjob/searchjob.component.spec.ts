import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchjobComponent } from './searchjob.component';

describe('SearchjobComponent', () => {
  let component: SearchjobComponent;
  let fixture: ComponentFixture<SearchjobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchjobComponent]
    });
    fixture = TestBed.createComponent(SearchjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
