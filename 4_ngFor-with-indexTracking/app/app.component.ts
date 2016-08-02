import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
            <h1>ngFor example:</h1>  
            <div>
                  <h2 *ngFor="let item of names; let i=index">{{i+1}}. {{item}}</h2>
            </div>`
})
export class AppComponent {

  names: String[];
  constructor() {
    this.names = ["angular", "dart", "typeScript", "javascript"]
  }


}
