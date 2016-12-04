import { Component, OnInit} from '@angular/core';

import { Event } from './event';
import { EventService } from './event.service';

//declare var google: any;

@Component({
  selector: 'my-app',
  template: `
      <h1>{{title}}</h1>
      <div id="googleMap"></div>
      <my-events></my-events>
  `
})

export class AppComponent implements OnInit {
  title = 'Swat Map';
  constructor() {}

  getEvents(): void {
    this.eventService.getEvents().then(events => this.events = events);
  }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(39.905271, -75.354344),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
      position: {lat:39.905271, lng:-75.354344},
      map: map,
      label: "New Event"
    });
  }

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }
  //convertEventIntoLocation(lat, lng): var {
    //return {lat: lat, lng: lng};
  //}
}
