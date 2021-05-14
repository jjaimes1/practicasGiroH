import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-asignaciones',
  templateUrl: './modal-asignaciones.component.html',
  styleUrls: ['./modal-asignaciones.component.css']
})
export class ModalAsignacionesComponent implements OnInit {

  constructor( private modal:NgbModal ) { }

  ngOnInit(): void {
  }

  openAsignaciones(contenidoAsignaciones) {
    this.modal.open(contenidoAsignaciones, {size:'md'} );
  }
}
