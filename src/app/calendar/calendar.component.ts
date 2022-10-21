import { Component, OnInit } from '@angular/core';
import {
  CalendarOptions,
  defineFullCalendarElement,
  DateSelectArg,
  EventClickArg,
  EventApi,
} from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import listPlugin from '@fullcalendar/list';
// import interactionPlugin from '@fullcalendar/interaction';

// make the <full-calendar> element globally available by calling this function at the top-level
defineFullCalendarElement();

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    // plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    plugins: [dayGridPlugin],

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    // initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    // select: this.handleDateSelect.bind(this),
    // eventClick: this.handleEventClick.bind(this),
    // eventsSet: this.handleEvents.bind(this),
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
}
