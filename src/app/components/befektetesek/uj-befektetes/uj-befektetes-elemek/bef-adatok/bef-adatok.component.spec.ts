import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BefAdatokComponent } from './bef-adatok.component';

describe('BefAdatokComponent', () => {
  let component: BefAdatokComponent;
  let fixture: ComponentFixture<BefAdatokComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BefAdatokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BefAdatokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
