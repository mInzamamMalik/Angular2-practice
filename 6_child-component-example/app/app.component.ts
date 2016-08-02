import { Component } from '@angular/core';
import { componentOne } from './childone.component';
import { componentTwo } from './childtwo.component';

@Component({
  selector: 'my-app',
  template: `           
            <div class="parent">
              <h1>i'm parent component:</h1>
              <p>
                  this is very simple example of component tree in angular 2,
                  <br>
                  RED Box is parent component and Green boxes are two childs :-)
              </p>

              <child-one></child-one>
              <child-two></child-two>
            </div>
            `,
  directives: [componentOne, componentTwo]
})
export class AppComponent {

  constructor() {
    this.names = ["angular", "dart", "typeScript", "javascript"]
  }

  names: String[];
  foo = (item) => {
    alert("you clicked on " + item);
  }

}
