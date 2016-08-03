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
        var _this = this;
        this.mydata = 10;
        this.todos = ["angular", "dart", "typeScript", "javascript"];
        setInterval(function () { return _this.mydata++; }, 1000);
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "           \n            <div class=\"parent\">\n              <h1>Component input(Dynamic) example</h1>\n              <p>\n                  we have a number in variable in parent component names mydata = {{mydata}}\n                  <br>\n                  we are going to give this variable as input to our child component dynamicly\n                  <br>\n                  and we have a setInterval in parent component which is incrementing our mydata variable\n                  <br>\n                  we can notice that as variable change in parent component it is also reflecting in child component instantly\n                  <br><br><br>\n\n                  This is called RxJS style of programming or some time called reactive programming\n\n                  <br><br><br>\n                  in addition ngFor with index tracking and child-components are also implement in this app\n                  \n              </p>\n              <p> ngFor Started here </p>\n\n              <todo *ngFor='let item of todos; let i=index' singleTodoInput=\"{{item}}\" anotherInput=\"{{mydata}}\"></todo>\n\n              <p> ngFor Ended here </p>\n            </div>\n            ",
            directives: [todoPost_component_1.todoPostComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map