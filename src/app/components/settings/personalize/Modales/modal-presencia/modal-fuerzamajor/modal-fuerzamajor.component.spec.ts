import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFuerzamajorComponent } from './modal-fuerzamajor.component';

describe('ModalFuerzamajorComponent', () => {
  let component: ModalFuerzamajorComponent;
  let fixture: ComponentFixture<ModalFuerzamajorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFuerzamajorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFuerzamajorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
