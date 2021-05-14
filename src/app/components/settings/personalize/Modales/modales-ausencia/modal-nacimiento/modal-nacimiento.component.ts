import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-nacimiento',
  templateUrl: './modal-nacimiento.component.html',
  styleUrls: ['./modal-nacimiento.component.css']
})
export class ModalNacimientoComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(contenido){
    this.modal.open(contenido, {size:'lg'});
  }
  modalResult(contenidoResultado) {
    this.modal.open(contenidoResultado, {size:'md'});
  }


}
