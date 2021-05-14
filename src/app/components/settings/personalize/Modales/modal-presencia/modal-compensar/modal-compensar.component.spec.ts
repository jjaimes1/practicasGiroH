import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCompensarComponent } from './modal-compensar.component';

describe('ModalCompensarComponent', () => {
  let component: ModalCompensarComponent;
  let fixture: ComponentFixture<ModalCompensarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCompensarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCompensarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
