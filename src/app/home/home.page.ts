import { Component, ViewChild, OnInit } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };

  eventSource = [];

  minDate = new Date().toISOString();

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  viewTitle = 'Ionic Calendar';

  myDate = new Date().toISOString();
  customPickerOptions: any;
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];


  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;
  
  constructor() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  ngOnInit() {
    this.resetEvent();
  }

  dateChanged(date) {
    console.log(date.detail.value);
    console.log(this.myDate);
  }

  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

  onEventSelected() {
    //TODO
  }

  onViewTitleChanged() {
    //TODO
  }

  onTimeSelected() {
    //TODO  
  }

}
