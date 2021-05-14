import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBodaComponent } from './modal-boda.component';

describe('ModalBodaComponent', () => {
  let component: ModalBodaComponent;
  let fixture: ComponentFixture<ModalBodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBodaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
