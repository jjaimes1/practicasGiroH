import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-succes',
  templateUrl: './succes.component.html',
  styleUrls: ['./succes.component.css'],
})

@Injectable()
export class SuccesComponent {

  constructor() {
  }

  succesPopup(show:boolean, msg:string){
    let succes = document.getElementById("msg");
    succes.innerHTML = msg;
    var element = document.getElementById("succes");
    if(show){
      element.classList.remove("hide");
      element.classList.add("show");
    }else{
      element.classList.remove("show");
      element.classList.add("hide");
    }
  }

}