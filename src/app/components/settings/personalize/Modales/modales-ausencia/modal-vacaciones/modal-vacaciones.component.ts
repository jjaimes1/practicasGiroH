import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-vacaciones',
  templateUrl: './modal-vacaciones.component.html',
  styleUrls: ['./modal-vacaciones.component.css']
})
export class ModalVacacionesComponent implements OnInit {

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
