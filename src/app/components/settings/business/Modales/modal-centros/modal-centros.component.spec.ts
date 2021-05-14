import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCentrosComponent } from './modal-centros.component';

describe('ModalCentrosComponent', () => {
  let component: ModalCentrosComponent;
  let fixture: ComponentFixture<ModalCentrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCentrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCentrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
