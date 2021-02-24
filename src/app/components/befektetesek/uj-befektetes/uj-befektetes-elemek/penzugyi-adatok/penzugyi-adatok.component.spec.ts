import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PenzugyiAdatokComponent } from './penzugyi-adatok.component';

describe('PenzugyiAdatokComponent', () => {
  let component: PenzugyiAdatokComponent;
  let fixture: ComponentFixture<PenzugyiAdatokComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PenzugyiAdatokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenzugyiAdatokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
