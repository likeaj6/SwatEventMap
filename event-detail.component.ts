import { Component, Input } from '@angular/core';

import { Event } from './event';

@Component({
  selector: 'my-event-detail',
  template: `
    <div *ngIf="event">
      <h2>{{event.name}} details!</h2>
      <div><label>id: </label>{{event.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="event.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class EventDetailComponent {
  @Input()
  event: Event;
}
