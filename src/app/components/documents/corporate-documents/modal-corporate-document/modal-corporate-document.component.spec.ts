import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCorporateDocumentComponent } from './modal-corporate-document.component';

describe('ModalCorporateDocumentComponent', () => {
  let component: ModalCorporateDocumentComponent;
  let fixture: ComponentFixture<ModalCorporateDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCorporateDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCorporateDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
