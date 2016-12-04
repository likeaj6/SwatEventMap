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
var event_1 = require('./event');
var EventDetailComponent = (function () {
    function EventDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', event_1.Event)
    ], EventDetailComponent.prototype, "event", void 0);
    EventDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-event-detail',
            template: "\n    <div id=\"eventDetails\"*ngIf=\"event\">\n      <h2>{{event.name}} details:</h2>\n      <h4><div>\n        <label>name: </label>\n        <input [(ngModel)]=\"event.name\" placeholder=\"name\"/>\n      </div></h4>\n      <h4><div>\n        <label>location: </label>\n        {{event.location}}\n      </div></h4>\n      <h4><div>\n        <label>start time: </label>\n        {{event.start_time}}\n      </div></h4>\n      <h4><div>\n        <label>end time: </label>\n        {{event.end_time}}\n      </div></h4>\n      <h4><div>\n        <label>description: </label>\n        {{event.description}}\n      </div></h4>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], EventDetailComponent);
    return EventDetailComponent;
}());
exports.EventDetailComponent = EventDetailComponent;
//# sourceMappingURL=event-detail.component.js.map