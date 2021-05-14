import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { fileURLToPath } from 'url';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {

  }

  selectedFiles = new Array();

  showFilesModal(contenido){
    this.modal.open(contenido,{size:'x1',centered:true});
  }

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
