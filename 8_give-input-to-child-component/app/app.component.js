"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todoPost_component_1 = require('./child-components/todoPost.component');
var AppComponent = (function () {
    function AppComponent() {
        this.todos = ["angular", "dart", "typeScript", "javascript"];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "           \n            <div class=\"parent\">\n              <h1>Component input example</h1>\n              <p>\n                  In this app we are going to implement that how to give input data to a component\n                  <br>\n                  Red box is parent componenet while Green is child\n                  <br>\n                  we have some hard coded array of string in parent component\n                  <br>\n                  we have writen a ngFor in parent component which itterates on that array                  \n                  <br>\n                  on every itteration we have writen child component markup \n                  <br>\n                  and give current itteration item(which is a string) to child component markup as input value\n                  <br>\n                  child component receives that value and simply display it and thats all.\n                  <br>\n                  in addition ngFor with index tracking and child-components are also implement in this app\n                  \n              </p>\n              <p> ngFor Started here </p>\n\n              <todo *ngFor=' let item of todos; let i=index ' singleTodoInput='{{item}}'></todo>\n\n              <p> ngFor Ended here </p>\n            </div>\n            ",
            directives: [todoPost_component_1.todoPostComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map