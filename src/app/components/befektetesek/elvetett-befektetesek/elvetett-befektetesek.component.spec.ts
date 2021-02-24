import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ElvetettBefektetesekComponent } from './elvetett-befektetesek.component';

describe('ElvetettBefektetesekComponent', () => {
  let component: ElvetettBefektetesekComponent;
  let fixture: ComponentFixture<ElvetettBefektetesekComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ElvetettBefektetesekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElvetettBefektetesekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
