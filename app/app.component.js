"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var event_service_1 = require('./event.service');
//declare var google: any;
var AppComponent = (function () {
    function AppComponent(eventService) {
        this.eventService = eventService;
        this.title = 'Swat Events Map';
    }
    AppComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getEvents().then(function (events) { return _this.events = events; });
    };
    AppComponent.prototype.createMarker = function (Event) {
        if (Event === void 0) { Event = e; }
        var marker = new google.maps.Marker({
            position: { lat: e.lat, lng: e.lng },
            map: map,
            label: e.name
        });
    };
    AppComponent.prototype.ngOnChanges = function () {
        this.getEvents();
    };
    AppComponent.prototype.ngOnInit = function () {
        var mapProp = {
            center: new google.maps.LatLng(39.905271, -75.354344),
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        var event1 = { id: 0, name: "MLH Local Hack Day", start_time: "9:00AM", end_time: "9:00PM", location: "sci center", lat: 39.905271, lng: -75.354344, description: " " };
        var marker = new google.maps.Marker({
            position: { lat: event1.lat, lng: event1.lng },
            map: map,
            label: event1.name
        });
        //this.events.forEach(createMarker(e))
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <h1>{{title}}</h1>\n      <div id=\"googleMap\"></div>\n      <my-events></my-events>\n  ",
            providers: [event_service_1.EventService]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map