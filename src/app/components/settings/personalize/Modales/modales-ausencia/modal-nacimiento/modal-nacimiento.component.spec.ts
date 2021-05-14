import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNacimientoComponent } from './modal-nacimiento.component';

describe('ModalNacimientoComponent', () => {
  let component: ModalNacimientoComponent;
  let fixture: ComponentFixture<ModalNacimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNacimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNacimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
