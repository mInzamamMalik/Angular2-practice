import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>First Angular 2 App by {{name}}</h1>'
})
export class AppComponent { 

name:String;
constructor(){
  this.name = 'Inzamam Malik'
}


}
