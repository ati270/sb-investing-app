import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PenzugyekComponent } from './penzugyek.component';

describe('PenzugyekComponent', () => {
  let component: PenzugyekComponent;
  let fixture: ComponentFixture<PenzugyekComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PenzugyekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenzugyekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
