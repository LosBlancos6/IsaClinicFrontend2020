import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewClinicComponent } from './review-clinic.component';

describe('ReviewClinicComponent', () => {
  let component: ReviewClinicComponent;
  let fixture: ComponentFixture<ReviewClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewClinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
