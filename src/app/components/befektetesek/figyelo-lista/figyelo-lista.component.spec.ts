import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FigyeloListaComponent } from './figyelo-lista.component';

describe('FigyeloListaComponent', () => {
  let component: FigyeloListaComponent;
  let fixture: ComponentFixture<FigyeloListaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FigyeloListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigyeloListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
