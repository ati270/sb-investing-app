import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PenzugyekNewYearAddDialogComponent } from './penzugyek-new-year-add-dialog.component';

describe('PenzugyekNewYearAddDialogComponent', () => {
  let component: PenzugyekNewYearAddDialogComponent;
  let fixture: ComponentFixture<PenzugyekNewYearAddDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PenzugyekNewYearAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenzugyekNewYearAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
