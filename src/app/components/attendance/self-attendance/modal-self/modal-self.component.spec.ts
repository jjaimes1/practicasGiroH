import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSelfComponent } from './modal-self.component';

describe('ModalSelfComponent', () => {
  let component: ModalSelfComponent;
  let fixture: ComponentFixture<ModalSelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSelfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
