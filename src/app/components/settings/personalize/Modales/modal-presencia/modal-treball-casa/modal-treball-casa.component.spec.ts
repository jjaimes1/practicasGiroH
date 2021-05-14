import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTreballCasaComponent } from './modal-treball-casa.component';

describe('ModalTreballCasaComponent', () => {
  let component: ModalTreballCasaComponent;
  let fixture: ComponentFixture<ModalTreballCasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTreballCasaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTreballCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
