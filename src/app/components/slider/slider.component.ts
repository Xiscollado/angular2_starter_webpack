import {Component} from "@angular/core";
import {MainNavComponent} from "../main_nav/main_nav.component";
import {LazyLoadImageDirective} from "ng2-lazyload-image";
import {UpcomingMatchComponent} from "../upcoming_match/upcoming_match.component";

@Component({
    moduleId: module.id,
    selector: 'app-slider',
    template: require('./slider.component.html'),
    styles: [require('./slider.component.scss')],
    directives : [MainNavComponent, LazyLoadImageDirective, UpcomingMatchComponent]
})

export class SliderComponent{
    title : string = 'Play the best games for loot';
    subtitle : string = 'Challenge another players and loot their gold';
    defaultImage = '/assets/img/placeholder_600x400.svg';
    image = '/assets/img/hearthstone-deck.jpg';
    offset = 100;
}