import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddEredmenyDialogComponent } from './add-eredmeny-dialog.component';

describe('AddEredmenyDialogComponent', () => {
  let component: AddEredmenyDialogComponent;
  let fixture: ComponentFixture<AddEredmenyDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEredmenyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEredmenyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
