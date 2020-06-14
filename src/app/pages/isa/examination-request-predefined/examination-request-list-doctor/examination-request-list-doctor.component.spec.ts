import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationRequestListDoctorComponent } from './examination-request-list-doctor.component';

describe('ExaminationRequestListDoctorComponent', () => {
  let component: ExaminationRequestListDoctorComponent;
  let fixture: ComponentFixture<ExaminationRequestListDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationRequestListDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationRequestListDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
