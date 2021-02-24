import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InvestmentHomeComponent } from './investment-home.component';

describe('InvestmentHomeComponent', () => {
  let component: InvestmentHomeComponent;
  let fixture: ComponentFixture<InvestmentHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
