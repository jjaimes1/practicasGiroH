import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-solicitudes',
  templateUrl: './modal-solicitudes.component.html',
  styleUrls: ['./modal-solicitudes.component.css']
})
export class ModalSolicitudesComponent implements OnInit {

  constructor( private modal:NgbModal ) { }

  ngOnInit(): void {
  }

  openSolicitudes(contenidoSolicitudes) {
    this.modal.open(contenidoSolicitudes, {size:'md'} );
  }
}
