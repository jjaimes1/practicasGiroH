import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit {

  date = moment();
  weekNo = Math.ceil(this.date.date() / 7);
  days = [];
  

  constructor() { }

  ngOnInit(): void {
    
  }
  changeWeek(flag) {
    if (flag < 0) {
      const prevWeekend = this.date.clone().subtract(1, 'week');
      prevWeekend.format("dddd Do");
    } else {
      const nextWeekend = this.date.clone().add(1, 'week');
      nextWeekend.format("dddd Do");
    }
  }

  public getWeeks() {
    const weekStart = this.date.clone().startOf('week');
    const weekEnd = this.date.clone().endOf('week');

    for (var i = 0; i <= 6; i++) {
      this.days.push(moment(weekStart).add(i, 'days').format("dddd Do"))
    }
  }


  







}
