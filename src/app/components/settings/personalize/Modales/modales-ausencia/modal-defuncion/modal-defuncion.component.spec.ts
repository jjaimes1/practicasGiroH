import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDefuncionComponent } from './modal-defuncion.component';

describe('ModalDefuncionComponent', () => {
  let component: ModalDefuncionComponent;
  let fixture: ComponentFixture<ModalDefuncionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDefuncionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDefuncionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
