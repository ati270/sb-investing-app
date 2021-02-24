import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MoreInfoDialogComponent } from './more-info-dialog.component';

describe('MoreInfoDialogComponent', () => {
  let component: MoreInfoDialogComponent;
  let fixture: ComponentFixture<MoreInfoDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
