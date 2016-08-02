import { Component } from '@angular/core';

@Component({
  selector: 'baby',
  template: `
            <div class="sub-child">
              <h3>i'm cute subchild baby component</h3>
              <p>
                 i can sit in any other component,<br>
                 and can also keep another small or large component in my abdomen
              </p>
              
            </div>`
})
export class subchildComponent {

  constructor() {
    this.names = ["angular", "dart", "typeScript", "javascript"]
  }

  names: String[];
  foo = (item) => {
    alert("you clicked on " + item);
  }

}
