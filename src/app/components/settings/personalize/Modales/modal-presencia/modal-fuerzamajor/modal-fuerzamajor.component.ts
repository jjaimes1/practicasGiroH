import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-fuerzamajor',
  templateUrl: './modal-fuerzamajor.component.html',
  styleUrls: ['./modal-fuerzamajor.component.css']
})
export class ModalFuerzamajorComponent implements OnInit {

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
