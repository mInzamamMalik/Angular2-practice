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
var childone_component_1 = require('./childone.component');
var childtwo_component_1 = require('./childtwo.component');
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
            template: "           \n            <div class=\"parent\">\n              <h1>i'm parent component:</h1>\n              <p>\n                  this is very simple example of component tree in angular 2,\n                  <br>\n                  RED Box is parent component and Green boxes are two childs :-)\n              </p>\n\n              <child-one></child-one>\n              <child-two></child-two>\n            </div>\n            ",
            directives: [childone_component_1.componentOne, childtwo_component_1.componentTwo]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map