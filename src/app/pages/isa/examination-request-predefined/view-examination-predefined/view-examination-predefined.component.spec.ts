import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExaminationPredefinedComponent } from './view-examination-predefined.component';

describe('ViewExaminationPredefinedComponent', () => {
  let component: ViewExaminationPredefinedComponent;
  let fixture: ComponentFixture<ViewExaminationPredefinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExaminationPredefinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExaminationPredefinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
