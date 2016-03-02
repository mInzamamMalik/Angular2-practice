import {Component} from 'angular2/core';
import {ChildOneComponent} from './childOne.component';




@Component({
    selector: 'my-app',

    template:    `
        <div>this is a component </div>
        
        <child-one></child-one>           
     `,

    directives: [ChildOneComponent]
})




export class AppComponent {
    name: string;

    constructor() {
        this.name = "this is a text";
    }
    
    
    
    
    
}