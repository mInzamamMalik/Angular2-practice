import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
            <h1>click example:</h1>
            <p>Execute a function on click of button, in addition ngFor is also included</p>  
            <div>
                  <h2 *ngFor="let item of names; let i=index">{{i+1}}. {{item}} 
                    <button (click)="foo(item)">Click Me</button>
                  </h2>
            </div>`
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
