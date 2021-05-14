import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-complementarias',
  templateUrl: './modal-complementarias.component.html',
  styleUrls: ['./modal-complementarias.component.css']
})
export class ModalComplementariasComponent implements OnInit {

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
