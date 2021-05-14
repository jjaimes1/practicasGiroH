import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-convenio',
  templateUrl: './modal-convenio.component.html',
  styleUrls: ['./modal-convenio.component.css']
})
export class ModalConvenioComponent implements OnInit {

  constructor( private modal:NgbModal ) { }

  ngOnInit(): void {
  }

  openConvenio(contenidoConvenio) {
    this.modal.open(contenidoConvenio, {size:'md'} );
  }
}
