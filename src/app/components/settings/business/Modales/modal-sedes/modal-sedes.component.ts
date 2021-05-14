import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-sedes',
  templateUrl: './modal-sedes.component.html',
  styleUrls: ['./modal-sedes.component.css']
})
export class ModalSedesComponent implements OnInit {

  constructor( private modal:NgbModal ) { }

  ngOnInit(): void {
  }

  openSedes(contenidoSedes) {
    this.modal.open(contenidoSedes, {size:'md'});
  }
}
