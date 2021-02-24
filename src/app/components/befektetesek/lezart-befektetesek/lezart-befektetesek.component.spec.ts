import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LezartBefektetesekComponent } from './lezart-befektetesek.component';

describe('LezartBefektetesekComponent', () => {
  let component: LezartBefektetesekComponent;
  let fixture: ComponentFixture<LezartBefektetesekComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LezartBefektetesekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LezartBefektetesekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
