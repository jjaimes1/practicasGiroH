import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPaternidadComponent } from './modal-paternidad.component';

describe('ModalPaternidadComponent', () => {
  let component: ModalPaternidadComponent;
  let fixture: ComponentFixture<ModalPaternidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPaternidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPaternidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
