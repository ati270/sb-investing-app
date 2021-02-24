import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VallalatPenzugyiElemzesComponent } from './vallalat-penzugyi-elemzes.component';

describe('VallalatPenzugyiElemzesComponent', () => {
  let component: VallalatPenzugyiElemzesComponent;
  let fixture: ComponentFixture<VallalatPenzugyiElemzesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VallalatPenzugyiElemzesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VallalatPenzugyiElemzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
