import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-self',
  encapsulation:ViewEncapsulation.None,
  templateUrl: './modal-self.component.html',
  styleUrls: ['./modal-self.component.css']
})
export class ModalSelfComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  OpenSM(contingut){
    this.modal.open(contingut, {size: 'sm'});
  }
}
