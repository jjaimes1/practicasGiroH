import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHabilidadComponent } from './modal-habilidad.component';

describe('ModalHabilidadComponent', () => {
  let component: ModalHabilidadComponent;
  let fixture: ComponentFixture<ModalHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalHabilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
