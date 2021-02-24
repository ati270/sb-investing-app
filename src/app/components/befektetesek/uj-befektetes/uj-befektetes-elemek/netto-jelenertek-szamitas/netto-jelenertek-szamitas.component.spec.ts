import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NettoJelenertekSzamitasComponent } from './netto-jelenertek-szamitas.component';

describe('NettoJelenertekSzamitasComponent', () => {
  let component: NettoJelenertekSzamitasComponent;
  let fixture: ComponentFixture<NettoJelenertekSzamitasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NettoJelenertekSzamitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NettoJelenertekSzamitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
