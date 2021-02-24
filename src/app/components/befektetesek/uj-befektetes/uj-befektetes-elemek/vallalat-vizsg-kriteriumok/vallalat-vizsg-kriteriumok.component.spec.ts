import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VallalatVizsgKriteriumokComponent } from './vallalat-vizsg-kriteriumok.component';

describe('VallalatVizsgKriteriumokComponent', () => {
  let component: VallalatVizsgKriteriumokComponent;
  let fixture: ComponentFixture<VallalatVizsgKriteriumokComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VallalatVizsgKriteriumokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VallalatVizsgKriteriumokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
