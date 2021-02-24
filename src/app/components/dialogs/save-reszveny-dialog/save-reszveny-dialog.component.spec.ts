import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SaveReszvenyDialogComponent } from './save-reszveny-dialog.component';

describe('SaveReszvenyDialogComponent', () => {
  let component: SaveReszvenyDialogComponent;
  let fixture: ComponentFixture<SaveReszvenyDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveReszvenyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveReszvenyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
