import { Component } from '@angular/core';
import { todoPostComponent } from './child-components/todoPost.component';


@Component({
  selector: 'my-app',
  template: `           
            <div class="parent">
              <h1>Component input(Dynamic) example</h1>
              <p>
                  we have a number in variable in parent component names mydata = {{mydata}}
                  <br>
                  we are going to give this variable as input to our child component dynamicly
                  <br>
                  and we have a setInterval in parent component which is incrementing our mydata variable
                  <br>
                  we can notice that as variable change in parent component it is also reflecting in child component instantly
                  <br><br><br>

                  This is called RxJS style of programming or some time called reactive programming

                  <br><br><br>
                  in addition ngFor with index tracking and child-components are also implement in this app
                  
              </p>
              <p> ngFor Started here </p>

              <todo *ngFor='let item of todos; let i=index' singleTodoInput="{{item}}" anotherInput="{{mydata}}"></todo>

              <p> ngFor Ended here </p>
            </div>
            `,
  directives: [todoPostComponent]
})
export class AppComponent {

  constructor() {
    this.todos = ["angular", "dart", "typeScript", "javascript"];
    setInterval(()=> this.mydata++, 1000);
  }

  todos: String[];

  mydata: number = 10;
    

  

}
