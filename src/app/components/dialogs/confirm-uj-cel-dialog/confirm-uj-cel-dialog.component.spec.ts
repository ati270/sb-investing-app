import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfirmUjCelDialogComponent } from './confirm-uj-cel-dialog.component';

describe('ConfirmUjCelDialogComponent', () => {
  let component: ConfirmUjCelDialogComponent;
  let fixture: ComponentFixture<ConfirmUjCelDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmUjCelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmUjCelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
