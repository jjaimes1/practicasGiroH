import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-tipos',
  templateUrl: './modal-tipos.component.html',
  styleUrls: ['./modal-tipos.component.css']
})
export class ModalTiposComponent implements OnInit {

  constructor( private modal:NgbModal ) { }

  ngOnInit(): void {
  }

  openTipos(contenidoTipos) {
    this.modal.open(contenidoTipos, {size:'md'} );
  }
}
