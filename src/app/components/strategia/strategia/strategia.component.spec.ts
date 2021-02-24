import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StrategiaComponent } from './strategia.component';

describe('StrategiaComponent', () => {
  let component: StrategiaComponent;
  let fixture: ComponentFixture<StrategiaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
