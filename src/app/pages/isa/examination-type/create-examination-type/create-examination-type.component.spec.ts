import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExaminationTypeComponent } from './create-examination-type.component';

describe('CreateExaminationTypeComponent', () => {
  let component: CreateExaminationTypeComponent;
  let fixture: ComponentFixture<CreateExaminationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExaminationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExaminationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
