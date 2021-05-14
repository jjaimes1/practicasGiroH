import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-reglas',
  templateUrl: './modal-reglas.component.html',
  styleUrls: ['./modal-reglas.component.css']
})
export class ModalReglasComponent implements OnInit {

  constructor( private modal:NgbModal ) { }

  ngOnInit(): void {
  }

  openReglas(contenidoReglas) {
    this.modal.open(contenidoReglas, {size:'lg'} );
  }
}
