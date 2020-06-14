import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeDoctorInClinicComponent } from './free-doctor-in-clinic.component';

describe('FreeDoctorInClinicComponent', () => {
  let component: FreeDoctorInClinicComponent;
  let fixture: ComponentFixture<FreeDoctorInClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeDoctorInClinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeDoctorInClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
