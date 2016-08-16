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
var header_notifications_service_1 = require('../../../services/header_notifications.service');
var http_1 = require("@angular/http");
require('../../../../../assets/js/header.js');
var HeaderComponent = (function () {
    function HeaderComponent(_notifications) {
        this._notifications = _notifications;
        this.chatNotifications = false;
        this.matchNotifications = false;
        this.mailNotifications = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._notifications.getChatNotifications(1)
            .subscribe(function (notif) {
            if (notif) {
                _this.chatNotifications = true;
            }
        });
        this._notifications.getEmailNotifications(1)
            .subscribe(function (notif) {
            if (notif) {
                _this.mailNotifications = true;
            }
        });
        this._notifications.getMatchNotifications(1)
            .subscribe(function (notif) {
            if (notif) {
                _this.matchNotifications = true;
            }
        });
    };
    HeaderComponent.prototype.removeNotification = function (prefix) {
        switch (prefix) {
            case ('chat'):
                this.chatNotifications = false;
                break;
            case ('match'):
                this.matchNotifications = false;
                break;
            case ('mail'):
                this.mailNotifications = false;
                break;
        }
    };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-header',
            template: require('./header.component.html'),
            styles: [require('./header.component.scss')],
            providers: [header_notifications_service_1.NotificationsService, http_1.HTTP_PROVIDERS, core_1.OnInit],
        }), 
        __metadata('design:paramtypes', [header_notifications_service_1.NotificationsService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map