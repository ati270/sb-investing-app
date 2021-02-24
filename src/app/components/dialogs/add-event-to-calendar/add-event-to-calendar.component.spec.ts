import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddEventToCalendarComponent } from './add-event-to-calendar.component';

describe('AddEventToCalendarComponent', () => {
  let component: AddEventToCalendarComponent;
  let fixture: ComponentFixture<AddEventToCalendarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventToCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventToCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
