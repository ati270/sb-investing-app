import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfirmDeleteCalendarDialogComponent } from './confirm-delete-calendar-dialog.component';

describe('ConfirmDeleteCalendarDialogComponent', () => {
  let component: ConfirmDeleteCalendarDialogComponent;
  let fixture: ComponentFixture<ConfirmDeleteCalendarDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteCalendarDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteCalendarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
