import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BefMenuComponent } from './bef-menu.component';

describe('BefMenuComponent', () => {
  let component: BefMenuComponent;
  let fixture: ComponentFixture<BefMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BefMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BefMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
