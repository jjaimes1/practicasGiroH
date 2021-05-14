import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import 'moment/locale/es';
// import {FormBuilder, Validators} from '@angular/forms';
moment.locale('es');


@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.css']
})
export class AbsencesComponent implements OnInit {

  // eventForm:any;
  
  

  week: any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];

  event = {
    input: null
  }
  
  eventSpan: any;
  monthSelect: any[];
  dateSelect: any;
  dateValue: any;
  
  momentYear = moment().year();
  momentMonth = moment().month() + 1;
  momentDay = moment().day;
  
  showModal: boolean = false;

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
    this.getDaysFromDate(this.momentMonth, this.momentYear);
  
  }

  toggleModal() {
    this.showModal = !this.showModal
  }

  guardarEvento() {
    this.eventSpan = this.event.input;
  }
  

  eventModal(contenido) {
    this.modal.open(contenido, {size: 'md'});
  }

  getDaysFromDate(month, year) {

    const startDate = moment.utc(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate;

    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`);
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      };
    });
    this.monthSelect = arrayDays;
  }

  changeMonth(flag) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDay(day) {
    const monthYear = this.dateSelect.format("YYYY-MM")
    const parse = `${monthYear}-${day.value}`
    const objectDate = moment(parse)
    this.dateValue = objectDate;
  }

}
