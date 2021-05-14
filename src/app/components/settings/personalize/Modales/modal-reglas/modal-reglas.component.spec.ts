import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReglasComponent } from './modal-reglas.component';

describe('ModalReglasComponent', () => {
  let component: ModalReglasComponent;
  let fixture: ComponentFixture<ModalReglasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalReglasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReglasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
