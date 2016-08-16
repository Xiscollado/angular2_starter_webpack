import {Component, OnInit} from '@angular/core';
import { NotificationsService} from '../../../services/header_notifications.service';
import {HTTP_PROVIDERS} from "@angular/http";

require('../../../../../assets/js/header.js');

@Component({
	moduleId: module.id,
  	selector: 'app-header',
  	template : require('./header.component.html'),
  	styles : [require('./header.component.scss')],
	providers : [NotificationsService, HTTP_PROVIDERS, OnInit],
})	

export class HeaderComponent{

	chatNotifications : boolean = false;
	matchNotifications : boolean = false;
	mailNotifications : boolean = false;

	constructor(private _notifications : NotificationsService){

	}

	ngOnInit() {


		this._notifications.getChatNotifications(1)
			.subscribe(notif => {
				if(notif){
					this.chatNotifications = true;
				}
			});
		this._notifications.getEmailNotifications(1)
			.subscribe(notif => {
				if(notif){
					this.mailNotifications = true;
				}
			});
		this._notifications.getMatchNotifications(1)
			.subscribe(notif => {
				if(notif){
					this.matchNotifications = true;
				}
			});
	}

	removeNotification(prefix:string) {
		switch (prefix) {
			case ('chat'):
				this.chatNotifications = false;
				break;
			case ('match'):
				this.matchNotifications = false;
				break;
			case('mail'):
				this.mailNotifications = false;
				break;
		}

	}

}