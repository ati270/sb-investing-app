import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddBesHatDialogComponent } from './add-bes-hat-dialog.component';

describe('AddBesHatDialogComponent', () => {
  let component: AddBesHatDialogComponent;
  let fixture: ComponentFixture<AddBesHatDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBesHatDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBesHatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
