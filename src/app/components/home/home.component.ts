import { Component } from '@angular/core';
import {SliderComponent} from "../slider/slider.component";

@Component({
	moduleId: module.id,
  	selector: 'app-home',
  	template : require('./home.component.html'),
  	styles : [require('./home.component.scss')],
	directives: [SliderComponent]
})	

export class HomeComponent{

}