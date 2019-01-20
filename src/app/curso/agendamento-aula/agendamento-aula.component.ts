import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import PerfectScrollbar from 'perfect-scrollbar';

declare const $: any;

@Component({
  selector: 'app-agendamento-aula',
  templateUrl: './agendamento-aula.component.html',
  styleUrls: ['./agendamento-aula.component.css']
})
export class AgendamentoAulaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const $calendar = $('#fullCalendar');

    const today = new Date();
    const y = today.getFullYear();
    const m = today.getMonth();
    const d = today.getDate();

    $calendar.fullCalendar({
      locale: 'pt-br',
      viewRender: function(view: any, element: any) {
        // We make sure that we activate the perfect scrollbar when the view isn't on Month
        if (view.name != 'month') {
          var elem = $(element).find('.fc-scroller')[0];
          let ps = new PerfectScrollbar(elem);
        }
      },
      header: {
        left: 'title',
        center: 'month, agendaWeek, agendaDay',
        right: 'prev, next, today'
      },
      defaultDate: today,
      selectable: true,
      selectHelper: true,
      views: {
        month: { // name of view
          titleFormat: 'MMMM YYYY'
        },
        week: {
          titleFormat: ' MMMM D YYYY'
        },
        day: {
          titleFormat: 'D MMM, YYYY'
        }
      },

      select: function(start: any, end: any) {

        // on select we show the Sweet Alert modal with an input
        swal({
          title: 'Reservar horário',
          html: '<div class="form-group">' +
              '<input class="form-control" placeholder="Aula de canto" id="input-field">' +
              '</div>',
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger',
          buttonsStyling: false
        }).then(function(result: any) {

          let eventData;
          const event_title = $('#input-field').val();

          if (event_title) {
            eventData = {
              title: event_title,
              start: start,
              end: end
            };
            $calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
          }

          $calendar.fullCalendar('unselect');

        });
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events


      // color classes: [ event-blue | event-azure | event-green | event-orange | event-red ]
      events: [
        {
          title: 'Inicio das aulas',
          start: new Date(y, m, 1),
          className: 'event-default'
        },
        {
          id: 999,
          title: 'Aula de canto',
          start: new Date(y, m, d - 4, 6, 0),
          allDay: false,
          className: 'event-rose'
        },
        {
          id: 999,
          title: 'Aula violão',
          start: new Date(y, m, d + 3, 6, 0),
          allDay: false,
          className: 'event-rose'
        },
        {
          title: 'Aula de piano',
          start: new Date(y, m, d - 1, 10, 30),
          allDay: false,
          className: 'event-green'
        },
        {
          title: 'Reunião com fornecedor',
          start: new Date(y, m, d + 7, 12, 0),
          end: new Date(y, m, d + 7, 14, 0),
          allDay: false,
          className: 'event-red'
        }]
    });
  }

}
