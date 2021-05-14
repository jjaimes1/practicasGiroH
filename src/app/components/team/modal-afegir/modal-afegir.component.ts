import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-afegir',
  templateUrl: './modal-afegir.component.html',
  styleUrls: ['./modal-afegir.component.css']
})
export class ModalAfegirComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  OpenSM(contingut){
    this.modal.open(contingut, {size: 'md'});
  }

}
