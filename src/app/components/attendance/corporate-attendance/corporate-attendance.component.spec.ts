import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAttendanceComponent } from './corporate-attendance.component';

describe('CorporateAttendanceComponent', () => {
  let component: CorporateAttendanceComponent;
  let fixture: ComponentFixture<CorporateAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
