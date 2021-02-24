import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UjBefektetesComponent } from './uj-befektetes.component';

describe('UjBefektetesComponent', () => {
  let component: UjBefektetesComponent;
  let fixture: ComponentFixture<UjBefektetesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UjBefektetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UjBefektetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
