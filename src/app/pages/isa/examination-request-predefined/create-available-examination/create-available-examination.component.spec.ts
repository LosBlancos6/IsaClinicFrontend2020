import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAvailableExaminationComponent } from './create-available-examination.component';

describe('CreateAvailableExaminationComponent', () => {
  let component: CreateAvailableExaminationComponent;
  let fixture: ComponentFixture<CreateAvailableExaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAvailableExaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAvailableExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
