import { Component, OnInit } from '@angular/core';
import { CalendarOptions, FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
import timeGridPlugin from '@fullcalendar/timegrid';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin
]);

@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.css']
})
export class BookingCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    timeZone: 'UTC',
    headerToolbar: {
        left: 'prev,next today addEventButton',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    customButtons: {
        addEventButton: {
            text: 'Booking',
            click: function() {
               alert("Booking Clicked");
            }
        }
    },
    events: [
      { title: 'event 1', date: '2021-06-28' },
      { title: 'event 2', date: '2021-06-27' }
    ],
    height: 850,
    locale: 'vi'
  };

}
