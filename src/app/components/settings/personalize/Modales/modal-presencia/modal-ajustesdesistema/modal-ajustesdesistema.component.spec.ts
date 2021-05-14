import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAjustesdesistemaComponent } from './modal-ajustesdesistema.component';

describe('ModalAjustesdesistemaComponent', () => {
  let component: ModalAjustesdesistemaComponent;
  let fixture: ComponentFixture<ModalAjustesdesistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAjustesdesistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAjustesdesistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
