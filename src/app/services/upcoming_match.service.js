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
var UpcomingMatchService = (function () {
    function UpcomingMatchService() {
    }
    UpcomingMatchService.prototype.getUpcomingMatch = function () {
        return {
            gameId: '1',
            gameName: 'hearthstone',
            gameType: 'cards',
            player1: {
                id: '1',
                name: 'Leo25',
                elo: '1245',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'
            },
            player2: {
                id: '2',
                name: 'Francis Cooper',
                elo: '1300',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/zakiwarfel/128.jpg'
            },
            time: '22:00',
            timeZone: 'UTC',
            streams: [
                {
                    name: 'youtube',
                    id: '1898797877787'
                },
                {
                    name: 'twitch',
                    id: '24358723409872'
                }
            ],
            bid: 12300
        };
    };
    UpcomingMatchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UpcomingMatchService);
    return UpcomingMatchService;
}());
exports.UpcomingMatchService = UpcomingMatchService;
//# sourceMappingURL=upcoming_match.service.js.map