import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})

@Injectable()
export class ErrorComponent {

  constructor() {
  }

  errorPopup(show:boolean, msg:string){
    document.getElementById("msgError").innerHTML = msg;
    var element = document.getElementById("error");
    if(show){
      element.classList.remove("hide");
      element.classList.add("show");
    }else{
      element.classList.remove("show");
      element.classList.add("hide");
    }
  }

}