import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NyitottBefektetesekComponent } from './nyitott-befektetesek.component';

describe('NyitottBefektetesekComponent', () => {
  let component: NyitottBefektetesekComponent;
  let fixture: ComponentFixture<NyitottBefektetesekComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NyitottBefektetesekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyitottBefektetesekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
