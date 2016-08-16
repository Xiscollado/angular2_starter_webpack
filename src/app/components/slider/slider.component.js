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
var core_1 = require("@angular/core");
var main_nav_component_1 = require("../main_nav/main_nav.component");
var ng2_lazyload_image_1 = require("ng2-lazyload-image");
var upcoming_match_component_1 = require("../upcoming_match/upcoming_match.component");
var SliderComponent = (function () {
    function SliderComponent() {
        this.title = 'Play the best games for loot';
        this.subtitle = 'Challenge another players and loot their gold';
        this.defaultImage = '/assets/img/placeholder_600x400.svg';
        this.image = '/assets/img/hearthstone-deck.jpg';
        this.offset = 100;
    }
    SliderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-slider',
            template: require('./slider.component.html'),
            styles: [require('./slider.component.scss')],
            directives: [main_nav_component_1.MainNavComponent, ng2_lazyload_image_1.LazyLoadImageDirective, upcoming_match_component_1.UpcomingMatchComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
//# sourceMappingURL=slider.component.js.map