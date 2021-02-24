import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UzenofalComponent } from './uzenofal.component';

describe('UzenofalComponent', () => {
  let component: UzenofalComponent;
  let fixture: ComponentFixture<UzenofalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UzenofalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UzenofalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
