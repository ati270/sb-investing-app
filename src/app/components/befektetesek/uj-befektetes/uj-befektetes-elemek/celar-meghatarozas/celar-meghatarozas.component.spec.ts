import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CelarMeghatarozasComponent } from './celar-meghatarozas.component';

describe('CelarMeghatarozasComponent', () => {
  let component: CelarMeghatarozasComponent;
  let fixture: ComponentFixture<CelarMeghatarozasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CelarMeghatarozasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelarMeghatarozasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
