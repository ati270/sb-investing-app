import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ManagelesComponent } from './manageles.component';

describe('ManagelesComponent', () => {
  let component: ManagelesComponent;
  let fixture: ComponentFixture<ManagelesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
