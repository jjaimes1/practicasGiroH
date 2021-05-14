import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-defuncion',
  templateUrl: './modal-defuncion.component.html',
  styleUrls: ['./modal-defuncion.component.css']
})
export class ModalDefuncionComponent implements OnInit {

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
