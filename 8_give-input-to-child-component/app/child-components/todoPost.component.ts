import { Component } from '@angular/core';

@Component({
  selector: 'todo',
  template: `
            <div class="child">
                {{singleTodoInput}}                             
            </div>`,
  inputs: ['singleTodoInput'],
  directives: []
})
export class todoPostComponent {

  constructor() {
    
  }

  singleTodoInput: String;

}
