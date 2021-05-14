import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSedesComponent } from './modal-sedes.component';

describe('ModalSedesComponent', () => {
  let component: ModalSedesComponent;
  let fixture: ComponentFixture<ModalSedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSedesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
