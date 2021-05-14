import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-departamentos',
  templateUrl: './modal-departamentos.component.html',
  styleUrls: ['./modal-departamentos.component.css']
})
export class ModalDepartamentosComponent implements OnInit {

  constructor( private modal:NgbModal ) { }

  ngOnInit(): void {
  }

  openDepartamentos(contenidoDepartamentos) {
    this.modal.open(contenidoDepartamentos, {size:'lg'});
  }
}
