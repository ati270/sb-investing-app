import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InvestingPdfViewerComponent } from './investing-pdf-viewer.component';

describe('InvestingPdfViewerComponent', () => {
  let component: InvestingPdfViewerComponent;
  let fixture: ComponentFixture<InvestingPdfViewerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestingPdfViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestingPdfViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
