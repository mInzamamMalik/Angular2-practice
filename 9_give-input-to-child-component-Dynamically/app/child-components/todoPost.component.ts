import { Component } from '@angular/core';

@Component({
  selector: 'todo',
  template: `
            <div class="child">
                {{singleTodoInput}}  {{anotherInput}}                           
            </div>`,
  inputs: ['singleTodoInput','anotherInput'],
  directives: []
})
export class todoPostComponent {

  constructor() {
    
  }

}
