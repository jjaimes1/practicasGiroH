import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-boda',
  templateUrl: './modal-boda.component.html',
  styleUrls: ['./modal-boda.component.css']
})
export class ModalBodaComponent implements OnInit {

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
