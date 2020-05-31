import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalListByPatientComponent } from './medical-list-by-patient.component';

describe('MedicalListByPatientComponent', () => {
  let component: MedicalListByPatientComponent;
  let fixture: ComponentFixture<MedicalListByPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalListByPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalListByPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
