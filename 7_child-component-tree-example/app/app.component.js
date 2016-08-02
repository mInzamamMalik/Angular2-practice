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
var childone_component_1 = require('./child-components/childone.component');
var childtwo_component_1 = require('./child-components/childtwo.component');
var subchild_component_1 = require('./subchild-components/subchild.component');
var AppComponent = (function () {
    function AppComponent() {
        this.foo = function (item) {
            alert("you clicked on " + item);
        };
        this.names = ["angular", "dart", "typeScript", "javascript"];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "           \n            <div class=\"parent\">\n              <h1>i'm parent component:</h1>\n              <p>\n                  This simple example that how component are live in tree order in angular 2,\n                  <br>\n                  when we place a component(child component) inside another component(parent component) in angular 2, we can say that two components are parent and child in relation\n                  <br>\n                  RED Box is parent component and Green boxes are its childs in relation\n                  <br>\n                  and in magenta box their is a sub-child\n                  <br>\n                  each child which is displayed is an instance of its defination,\n                  <br>                                    \n                  Angular 2 create an instance of child component and place it inside parent component\n                  <br>\n                  we can place a component more than one place 'as child component'\n                  <br>\n                  just have a look of magenta box, in defination it is a single component but used in three places\n              </p>\n\n              <child-one></child-one>\n              <child-two></child-two>\n\n              <baby></baby>\n            </div>\n            ",
            directives: [childone_component_1.componentOne, childtwo_component_1.componentTwo, subchild_component_1.subchildComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map