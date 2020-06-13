import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingExaminationAsPatientComponent } from './scheduling-examination-as-patient.component';

describe('SchedulingExaminationAsPatientComponent', () => {
  let component: SchedulingExaminationAsPatientComponent;
  let fixture: ComponentFixture<SchedulingExaminationAsPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulingExaminationAsPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingExaminationAsPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
