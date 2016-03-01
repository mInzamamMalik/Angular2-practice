import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';


@Component({
    selector: 'my-app',
    
    template: '<h1   *ngFor="#name of names"  >My First Angular 2 App,  {{name}} </h1>',
    
    directives :    [NgFor]
})




export class AppComponent {
    names: string[];

     constructor() {
        this.names = ['inzi', 'rehan', 'hassan', 'amna'];
    }
 }