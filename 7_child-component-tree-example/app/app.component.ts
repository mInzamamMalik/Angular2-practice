import { Component } from '@angular/core';
import { componentOne } from './child-components/childone.component';
import { componentTwo } from './child-components/childtwo.component';
import { subchildComponent } from './subchild-components/subchild.component';


@Component({
  selector: 'my-app',
  template: `           
            <div class="parent">
              <h1>i'm parent component:</h1>
              <p>
                  This simple example that how component are live in tree order in angular 2,
                  <br>
                  when we place a component(child component) inside another component(parent component) in angular 2, we can say that two components are parent and child in relation
                  <br>
                  RED Box is parent component and Green boxes are its childs in relation
                  <br>
                  and in magenta box their is a sub-child
                  <br>
                  each child which is displayed is an instance of its defination,
                  <br>                                    
                  Angular 2 create an instance of child component and place it inside parent component
                  <br>
                  we can place a component more than one place 'as child component'
                  <br>
                  just have a look of magenta box, in defination it is a single component but used in three places
              </p>

              <child-one></child-one>
              <child-two></child-two>

              <baby></baby>
            </div>
            `,
  directives: [componentOne, componentTwo, subchildComponent]
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
