import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTreballFestiuComponent } from './modal-treball-festiu.component';

describe('ModalTreballFestiuComponent', () => {
  let component: ModalTreballFestiuComponent;
  let fixture: ComponentFixture<ModalTreballFestiuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTreballFestiuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTreballFestiuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
