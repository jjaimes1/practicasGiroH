import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-centros',
  templateUrl: './modal-centros.component.html',
  styleUrls: ['./modal-centros.component.css']
})
export class ModalCentrosComponent implements OnInit {

  constructor( private modal:NgbModal ) { }

  ngOnInit(): void {
  }

  openCentros(contenidoCentros) {
    this.modal.open(contenidoCentros, {size:'lg'});
  }
}
