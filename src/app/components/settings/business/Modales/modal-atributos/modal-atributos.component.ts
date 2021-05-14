import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-atributos',
  templateUrl: './modal-atributos.component.html',
  styleUrls: ['./modal-atributos.component.css']
})
export class ModalAtributosComponent implements OnInit {

  constructor( private modal:NgbModal ) { }

  ngOnInit(): void {
  }

  openAtributos(contenidoAtributos) {
    this.modal.open(contenidoAtributos, {size:'sm'});
  }
}
