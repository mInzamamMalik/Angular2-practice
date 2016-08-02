import { Component } from '@angular/core';
@Component({
  selector: 'child-two',
  template: `
            <div class="child">
              <h1>i'm child two:</h1>
              <p>Execute a function on click of button, in addition ngFor is also included</p>
              <div>
                <h2 *ngFor="let item of names; let i=index">{{i+1}}. {{item}}
                  <button (click)="foo(item)">Click Me</button>
                </h2>
              </div>
            </div>`
})
export class componentTwo {

  constructor() {
    this.names = ["angular", "dart", "typeScript", "javascript"]
  }

  names: String[];
  foo = (item) => {
    alert("you clicked on " + item);
  }

}
