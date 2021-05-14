import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVacacionesComponent } from './modal-vacaciones.component';

describe('ModalVacacionesComponent', () => {
  let component: ModalVacacionesComponent;
  let fixture: ComponentFixture<ModalVacacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalVacacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVacacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
