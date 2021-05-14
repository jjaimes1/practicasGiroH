import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-enfermedad',
  templateUrl: './modal-enfermedad.component.html',
  styleUrls: ['./modal-enfermedad.component.css']
})
export class ModalEnfermedadComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(contenido) {
    this.modal.open(contenido, {size:'lg'});
  }
  modalResult(contenidoResultado) {
    this.modal.open(contenidoResultado, {size:'md'});
  }

}
