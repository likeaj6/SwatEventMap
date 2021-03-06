import { Component, OnInit} from '@angular/core';

import { Event } from './event';
import { EventService } from './event.service';

//declare var google: any;

@Component({
  selector: 'my-events',
  template: `
      <h2>Upcoming Events</h2>

      <ul class="events">
          <li *ngFor="let event of events"
            [class.selected]="event === selectedEvent"
            (click)="onSelect(event)"
            type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            <span class="badge">{{event.id}}</span> {{event.name}}
          </li>
      </ul>
      <my-event-detail [event]="selectedEvent"></my-event-detail>
  `,
  styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .events {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .events li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .events li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .events li:hover {
        color: #607D8B;
        font-family:"Tahoma";
        background-color: #DDD;
        left: .1em;
      }
      .events .text {
        position: relative;
        top: -3px;
      }
      .events .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: rgb(140, 110, 110);
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
  `],
  providers: [EventService]
})

export class EventsComponent implements OnInit {
  events: Event[];
  selectedEvent: Event;

  constructor(private eventService: EventService) { }

  getEvents(): void {
    this.eventService.getEvents().then(events => this.events = events);
  }

  ngOnInit(): void {
    this.getEvents();
  }

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }
  //convertEventIntoLocation(lat, lng): var {
    //return {lat: lat, lng: lng};
  //}
}
