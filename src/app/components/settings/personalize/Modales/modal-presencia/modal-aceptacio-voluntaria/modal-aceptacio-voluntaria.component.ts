import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-aceptacio-voluntaria',
  templateUrl: './modal-aceptacio-voluntaria.component.html',
  styleUrls: ['./modal-aceptacio-voluntaria.component.css']
})
export class ModalAceptacioVoluntariaComponent implements OnInit {

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
