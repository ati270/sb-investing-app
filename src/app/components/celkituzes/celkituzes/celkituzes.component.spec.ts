import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CelkituzesComponent } from './celkituzes.component';

describe('CelkituzesComponent', () => {
  let component: CelkituzesComponent;
  let fixture: ComponentFixture<CelkituzesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CelkituzesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelkituzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
