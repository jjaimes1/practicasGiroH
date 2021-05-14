import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-compensar',
  templateUrl: './modal-compensar.component.html',
  styleUrls: ['./modal-compensar.component.css']
})
export class ModalCompensarComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  OpenSM(contingut){
    this.modal.open(contingut, {size: 'md'});
  }

  openModal(contenido){
    this.modal.open(contenido, {size: 'lg'});
  }

}
