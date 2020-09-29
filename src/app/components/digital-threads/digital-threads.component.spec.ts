import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalThreadsComponent } from './digital-threads.component';

describe('DigitalThreadsComponent', () => {
  let component: DigitalThreadsComponent;
  let fixture: ComponentFixture<DigitalThreadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalThreadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
