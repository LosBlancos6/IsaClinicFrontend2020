import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableExaminationOfDoctorComponent } from './available-examination-of-doctor.component';

describe('AvailableExaminationOfDoctorComponent', () => {
  let component: AvailableExaminationOfDoctorComponent;
  let fixture: ComponentFixture<AvailableExaminationOfDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableExaminationOfDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableExaminationOfDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
