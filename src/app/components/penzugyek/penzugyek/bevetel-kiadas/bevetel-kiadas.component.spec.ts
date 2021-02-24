import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BevetelKiadasComponent } from './bevetel-kiadas.component';

describe('BevetelKiadasComponent', () => {
  let component: BevetelKiadasComponent;
  let fixture: ComponentFixture<BevetelKiadasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BevetelKiadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BevetelKiadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
