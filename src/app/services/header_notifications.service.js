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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var Rx_1 = require("rxjs/Rx");
var NotificationsService = (function () {
    function NotificationsService(_http) {
        this._http = _http;
        //Just a placeholder
        this.url = "https://jsonplaceholder.typicode.com/comments/";
    }
    NotificationsService.prototype.getEmailNotifications = function (number) {
        var _this = this;
        return Rx_1.Observable.interval(600000)
            .flatMap(function () { return _this._http.get(_this.url + number)
            .map(function (res) { return (res.json()); }); });
    };
    NotificationsService.prototype.getChatNotifications = function (number) {
        var _this = this;
        return Rx_1.Observable.interval(300000)
            .flatMap(function () { return _this._http.get(_this.url + number)
            .map(function (res) { return (res.json()); }); });
    };
    NotificationsService.prototype.getMatchNotifications = function (number) {
        var _this = this;
        return Rx_1.Observable.interval(150000)
            .flatMap(function () { return _this._http.get(_this.url + number)
            .map(function (res) { return (res.json()); }); });
    };
    NotificationsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NotificationsService);
    return NotificationsService;
}());
exports.NotificationsService = NotificationsService;
//# sourceMappingURL=header_notifications.service.js.map