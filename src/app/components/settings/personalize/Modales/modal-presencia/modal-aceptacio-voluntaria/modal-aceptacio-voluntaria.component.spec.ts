import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAceptacioVoluntariaComponent } from './modal-aceptacio-voluntaria.component';

describe('ModalAceptacioVoluntariaComponent', () => {
  let component: ModalAceptacioVoluntariaComponent;
  let fixture: ComponentFixture<ModalAceptacioVoluntariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAceptacioVoluntariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAceptacioVoluntariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
