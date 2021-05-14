import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExtraordinariasComponent } from './modal-extraordinarias.component';

describe('ModalExtraordinariasComponent', () => {
  let component: ModalExtraordinariasComponent;
  let fixture: ComponentFixture<ModalExtraordinariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExtraordinariasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExtraordinariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
