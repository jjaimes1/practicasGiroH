import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-functionalities',
  templateUrl: './functionalities.component.html',
  styleUrls: ['./functionalities.component.css']
})
export class FunctionalitiesComponent implements OnInit {

  addclass: string;

  constructor() { }

  ngOnInit(): void {
  }

  onActivate(componentReference: any) {
    this.addclass = componentReference.navClass;
  }

}



