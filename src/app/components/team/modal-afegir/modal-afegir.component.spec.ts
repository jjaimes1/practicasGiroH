import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAfegirComponent } from './modal-afegir.component';

describe('ModalAfegirComponent', () => {
  let component: ModalAfegirComponent;
  let fixture: ComponentFixture<ModalAfegirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAfegirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAfegirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
