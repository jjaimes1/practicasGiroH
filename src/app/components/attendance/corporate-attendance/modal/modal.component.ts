import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }
  
  OpenSM(contingut){
  this.modal.open(contingut, {size: 'lg'});
}
}
