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
var EventsComponent = (function () {
    function EventsComponent(eventService) {
        this.eventService = eventService;
    }
    EventsComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getEvents().then(function (events) { return _this.events = events; });
    };
    EventsComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    EventsComponent.prototype.onSelect = function (event) {
        this.selectedEvent = event;
    };
    EventsComponent = __decorate([
        core_1.Component({
            selector: 'my-events',
            template: "\n      <h2>Upcoming Events</h2>\n\n      <ul class=\"events\">\n          <li *ngFor=\"let event of events\"\n            [class.selected]=\"event === selectedEvent\"\n            (click)=\"onSelect(event)\"\n            type=\"button\" class=\"btn btn-default\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"right\" data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n            <span class=\"badge\">{{event.id}}</span> {{event.name}}\n          </li>\n      </ul>\n      <my-event-detail [event]=\"selectedEvent\"></my-event-detail>\n  ",
            styles: ["\n      .selected {\n        background-color: #CFD8DC !important;\n        color: white;\n      }\n      .events {\n        margin: 0 0 2em 0;\n        list-style-type: none;\n        padding: 0;\n        width: 15em;\n      }\n      .events li {\n        cursor: pointer;\n        position: relative;\n        left: 0;\n        background-color: #EEE;\n        margin: .5em;\n        padding: .3em 0;\n        height: 1.6em;\n        border-radius: 4px;\n      }\n      .events li.selected:hover {\n        background-color: #BBD8DC !important;\n        color: white;\n      }\n      .events li:hover {\n        color: #607D8B;\n        font-family:\"Tahoma\";\n        background-color: #DDD;\n        left: .1em;\n      }\n      .events .text {\n        position: relative;\n        top: -3px;\n      }\n      .events .badge {\n        display: inline-block;\n        font-size: small;\n        color: white;\n        padding: 0.8em 0.7em 0 0.7em;\n        background-color: rgb(140, 110, 110);\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -4px;\n        height: 1.8em;\n        margin-right: .8em;\n        border-radius: 4px 0 0 4px;\n      }\n  "],
            providers: [event_service_1.EventService]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], EventsComponent);
    return EventsComponent;
}());
exports.EventsComponent = EventsComponent;
//# sourceMappingURL=events.component.js.map