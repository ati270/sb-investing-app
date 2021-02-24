import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddDatetimeDialogComponent } from './add-datetime-dialog.component';

describe('AddDatetimeDialogComponent', () => {
  let component: AddDatetimeDialogComponent;
  let fixture: ComponentFixture<AddDatetimeDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDatetimeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDatetimeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
