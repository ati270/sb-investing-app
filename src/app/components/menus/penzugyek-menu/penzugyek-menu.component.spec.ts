import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PenzugyekMenuComponent } from './penzugyek-menu.component';

describe('PenzugyekMenuComponent', () => {
  let component: PenzugyekMenuComponent;
  let fixture: ComponentFixture<PenzugyekMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PenzugyekMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenzugyekMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
