import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAsignacionesComponent } from './modal-asignaciones.component';

describe('ModalAsignacionesComponent', () => {
  let component: ModalAsignacionesComponent;
  let fixture: ComponentFixture<ModalAsignacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAsignacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAsignacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
