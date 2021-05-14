import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-rol',
  templateUrl: './modal-rol.component.html',
  styleUrls: ['./modal-rol.component.css']
})
export class ModalRolComponent implements OnInit {

  constructor( private modal:NgbModal ) { }

  ngOnInit(): void {
  }

  openRol(contenidoRol) {
    this.modal.open(contenidoRol, {size:'lg'} );
  }
}
