import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComplementariasComponent } from './modal-complementarias.component';

describe('ModalComplementariasComponent', () => {
  let component: ModalComplementariasComponent;
  let fixture: ComponentFixture<ModalComplementariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComplementariasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComplementariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
