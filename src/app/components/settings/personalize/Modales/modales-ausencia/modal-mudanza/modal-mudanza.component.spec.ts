import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMudanzaComponent } from './modal-mudanza.component';

describe('ModalMudanzaComponent', () => {
  let component: ModalMudanzaComponent;
  let fixture: ComponentFixture<ModalMudanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMudanzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMudanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
