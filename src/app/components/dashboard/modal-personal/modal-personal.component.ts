import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';  

@Component({
  selector: 'app-modal-personal',
  templateUrl: './modal-personal.component.html',
  styleUrls: ['./modal-personal.component.css']
})
export class ModalPersonalComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  openRequests (contenidoRequests) {
    this.modal.open(contenidoRequests, {size:'lg'});
  }

  showFilesModal(contenidoDocuments) {
    this.modal.open(contenidoDocuments, {size:'md'});
  }

  selectedFiles = new Array();

  deshabilitar(link:any){
    link.style.pointerEvents = 'none';
    setTimeout(function(){
        link.style.pointerEvents = null;
        link.style.color = 'blue';
    }, 3000);
  }

  dragOverHandler(event){
    event.preventDefault();
    event.stopPropagation();
  }

  dropHandler(event){
    event.preventDefault();

    if(event.dataTransfer.items){
      for(var i = 0; i < event.dataTransfer.items.length; i++){
        if(event.dataTransfer.items[i].kind === 'file'){
          let file  = event.dataTransfer.item[i].getAsFile();
          let obj = {
            fileName: file.name,
            selectedFile:file,
            fileId: `${file.name}-${file.lastModified}`,
            uploadCompleted:false
          }
          this.selectedFiles.push(obj);
        }
        //Actualizar status
      }   
    }
  }

}
