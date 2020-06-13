import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAvailableExaminationComponent } from './view-available-examination.component';

describe('ViewAvailableExaminationComponent', () => {
  let component: ViewAvailableExaminationComponent;
  let fixture: ComponentFixture<ViewAvailableExaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAvailableExaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAvailableExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
