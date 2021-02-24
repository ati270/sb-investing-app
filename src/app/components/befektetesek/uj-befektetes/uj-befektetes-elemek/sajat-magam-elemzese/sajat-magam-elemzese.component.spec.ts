import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SajatMagamElemzeseComponent } from './sajat-magam-elemzese.component';

describe('SajatMagamElemzeseComponent', () => {
  let component: SajatMagamElemzeseComponent;
  let fixture: ComponentFixture<SajatMagamElemzeseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SajatMagamElemzeseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SajatMagamElemzeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
