import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-paternidad',
  templateUrl: './modal-paternidad.component.html',
  styleUrls: ['./modal-paternidad.component.css']
})
export class ModalPaternidadComponent implements OnInit {

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
