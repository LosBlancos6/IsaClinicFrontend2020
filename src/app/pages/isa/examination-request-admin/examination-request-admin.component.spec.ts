import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationRequestAdminComponent } from './examination-request-admin.component';

describe('ExaminationRequestAdminComponent', () => {
  let component: ExaminationRequestAdminComponent;
  let fixture: ComponentFixture<ExaminationRequestAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationRequestAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationRequestAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
