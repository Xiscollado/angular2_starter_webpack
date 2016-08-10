import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';

@Component({
	moduleId: module.id,
  	selector: 'my-app',
  	template: '<app-header></app-header><router-outlet></router-outlet><app-footer></app-footer>',
  	styles: [require('../../assets/scss/styles.scss')],
 	encapsulation: ViewEncapsulation.None,
 	directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent]
})

export class AppComponent { }