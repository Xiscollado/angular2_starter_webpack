import {Injectable} from '@angular/core';

@Injectable()
export class UpcomingMatchService{

	 getUpcomingMatch(){
		return {
			gameId : '1',
			gameName : 'hearthstone',
			gameType : 'cards',
			player1 : {
				id : '1',
				name : 'Leo25',
				elo : '1245',
				avatar : 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'
			},
			player2 : {
				id : '2',
				name : 'Francis Cooper',
				elo : '1300',
				avatar : 'https://s3.amazonaws.com/uifaces/faces/twitter/zakiwarfel/128.jpg'
			},
			time : '22:00',
			timeZone : 'UTC',
			streams : [
				{
					name : 'youtube',
					id : '1898797877787'
				},
				{
					name : 'twitch',
					id : '24358723409872'
				}

			],
			bid : 12300
		}
	}

}