import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BefektetesComponent } from './befektetes.component';

describe('BefektetesComponent', () => {
  let component: BefektetesComponent;
  let fixture: ComponentFixture<BefektetesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BefektetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BefektetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
