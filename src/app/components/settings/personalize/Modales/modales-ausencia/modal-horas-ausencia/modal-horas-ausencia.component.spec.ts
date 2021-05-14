import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHorasAusenciaComponent } from './modal-horas-ausencia.component';

describe('ModalHorasAusenciaComponent', () => {
  let component: ModalHorasAusenciaComponent;
  let fixture: ComponentFixture<ModalHorasAusenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalHorasAusenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHorasAusenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
