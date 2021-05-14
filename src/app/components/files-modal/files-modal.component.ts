import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-files-modal',
  templateUrl: './files-modal.component.html',
  styleUrls: ['./files-modal.component.css']
})
export class FilesModalComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

}
