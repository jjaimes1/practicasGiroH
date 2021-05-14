import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-cargos',
  templateUrl: './modal-cargos.component.html',
  styleUrls: ['./modal-cargos.component.css']
})
export class ModalCargosComponent implements OnInit {

  constructor( private modal:NgbModal ) { }

  ngOnInit(): void {
  }

  openCargos(contenidoCargos) {
    this.modal.open(contenidoCargos, {size:'md'});
  }
}
