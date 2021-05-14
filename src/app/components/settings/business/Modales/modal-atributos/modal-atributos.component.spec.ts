import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAtributosComponent } from './modal-atributos.component';

describe('ModalAtributosComponent', () => {
  let component: ModalAtributosComponent;
  let fixture: ComponentFixture<ModalAtributosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAtributosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
