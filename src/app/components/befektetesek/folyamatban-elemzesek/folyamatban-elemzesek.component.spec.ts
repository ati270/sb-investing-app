import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FolyamatbanElemzesekComponent } from './folyamatban-elemzesek.component';

describe('FolyamatbanElemzesekComponent', () => {
  let component: FolyamatbanElemzesekComponent;
  let fixture: ComponentFixture<FolyamatbanElemzesekComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FolyamatbanElemzesekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolyamatbanElemzesekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
