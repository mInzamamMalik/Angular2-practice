import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';


@Component({
    selector: 'my-app',

    template:

    `
    <input [value]="  'Hello, ' + name   ">
    
     `,

    directives: [NgFor]
})




export class AppComponent {
    name: string;

    constructor() {
        this.name = "this is a text";
    }
    
    
    
    
    
}