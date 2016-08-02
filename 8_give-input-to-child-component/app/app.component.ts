import { Component } from '@angular/core';
import { todoPostComponent } from './child-components/todoPost.component';


@Component({
  selector: 'my-app',
  template: `           
            <div class="parent">
              <h1>Component input example</h1>
              <p>
                  In this app we are going to implement that how to give input data to a component
                  <br>
                  Red box is parent componenet while Green is child
                  <br>
                  we have some hard coded array of string in parent component
                  <br>
                  we have writen a ngFor in parent component which itterates on that array                  
                  <br>
                  on every itteration we have writen child component markup 
                  <br>
                  and give current itteration item(which is a string) to child component markup as input value
                  <br>
                  child component receives that value and simply display it and thats all.
                  <br>
                  in addition ngFor with index tracking and child-components are also implement in this app
                  
              </p>
              <p> ngFor Started here </p>

              <todo *ngFor=' let item of todos; let i=index ' singleTodoInput='{{item}}'></todo>

              <p> ngFor Ended here </p>
            </div>
            `,
  directives: [todoPostComponent]
})
export class AppComponent {

  constructor() {
    this.todos = ["angular", "dart", "typeScript", "javascript"]
  }

  todos: String[];
  

}
