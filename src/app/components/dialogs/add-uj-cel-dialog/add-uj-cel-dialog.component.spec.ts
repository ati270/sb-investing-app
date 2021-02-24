import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddUjCelDialogComponent } from './add-uj-cel-dialog.component';

describe('AddUjCelDialogComponent', () => {
  let component: AddUjCelDialogComponent;
  let fixture: ComponentFixture<AddUjCelDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUjCelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUjCelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
