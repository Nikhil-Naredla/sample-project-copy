import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsDocumentsComponent } from './tutorials-documents.component';

describe('TutorialsDocumentsComponent', () => {
  let component: TutorialsDocumentsComponent;
  let fixture: ComponentFixture<TutorialsDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialsDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
