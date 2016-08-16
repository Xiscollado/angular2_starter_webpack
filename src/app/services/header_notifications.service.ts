import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";

@Injectable()
export class NotificationsService {

    //Just a placeholder
    private url = "https://jsonplaceholder.typicode.com/comments/";

    constructor(private _http:Http) {

    }

    getEmailNotifications(number:number) {
        return Observable.interval(600000)
            .flatMap(() => this._http.get(this.url + number)
                .map(res => (res.json())));
    }

    getChatNotifications(number:number) {
        return Observable.interval(300000)
            .flatMap(() => this._http.get(this.url + number)
                .map(res => (res.json())));
    }

    getMatchNotifications(number:number) {
        return Observable.interval(150000)
            .flatMap(() => this._http.get(this.url + number)
                .map(res => (res.json())));
    }
}