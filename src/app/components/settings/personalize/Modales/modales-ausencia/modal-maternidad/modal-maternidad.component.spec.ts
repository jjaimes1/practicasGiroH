import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMaternidadComponent } from './modal-maternidad.component';

describe('ModalMaternidadComponent', () => {
  let component: ModalMaternidadComponent;
  let fixture: ComponentFixture<ModalMaternidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMaternidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMaternidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
