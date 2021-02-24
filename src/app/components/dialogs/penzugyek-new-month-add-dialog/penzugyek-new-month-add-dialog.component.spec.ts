import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PenzugyekNewMonthAddDialogComponent } from './penzugyek-new-month-add-dialog.component';

describe('PenzugyekNewMonthAddDialogComponent', () => {
  let component: PenzugyekNewMonthAddDialogComponent;
  let fixture: ComponentFixture<PenzugyekNewMonthAddDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PenzugyekNewMonthAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenzugyekNewMonthAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
