import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-corporate-document',
  templateUrl: './modal-corporate-document.component.html',
  styleUrls: ['./modal-corporate-document.component.css']
})
export class ModalCorporateDocumentComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }
  
  OpenSM(contingut){
  this.modal.open(contingut, {size: 'lg'});
}

  fileToUpload: File = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

}
