import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-extraordinarias',
  templateUrl: './modal-extraordinarias.component.html',
  styleUrls: ['./modal-extraordinarias.component.css']
})
export class ModalExtraordinariasComponent implements OnInit {

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
