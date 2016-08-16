import { Component, OnInit } from '@angular/core';
import {UpcomingMatchService} from "../../services/upcoming_match.service";

@Component({
    moduleId : module.id,
    selector : 'app-upcoming_match',
    template : require('./upcoming_match.component.html'),
    styles : [require('./upcoming_match.component.scss')],
    providers : [UpcomingMatchService]
})

export class UpcomingMatchComponent{

    private upcomingMatch : Object;

    constructor( private _upcomingMatch : UpcomingMatchService ){

    }

    ngOnInit(){
        this.upcomingMatch = this._upcomingMatch.getUpcomingMatch();
    }

}