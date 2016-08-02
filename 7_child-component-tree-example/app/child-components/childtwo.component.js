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
var subchild_component_1 = require('../subchild-components/subchild.component');
var componentTwo = (function () {
    function componentTwo() {
        this.foo = function (item) {
            alert("you clicked on " + item);
        };
        this.names = ["angular", "dart", "typeScript", "javascript"];
    }
    componentTwo = __decorate([
        core_1.Component({
            selector: 'child-two',
            template: "\n            <div class=\"child\">\n              <h1>i'm child two:</h1>\n              <p>Execute a function on click of button, in addition ngFor is also included</p>\n              <div>\n                <h2 *ngFor=\"let item of names; let i=index\">{{i+1}}. {{item}}\n                  <button (click)=\"foo(item)\">Click Me</button>\n                </h2>\n              </div>\n              <baby></baby>\n              <baby></baby>\n            </div>            \n            ",
            directives: [subchild_component_1.subchildComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], componentTwo);
    return componentTwo;
}());
exports.componentTwo = componentTwo;
//# sourceMappingURL=childtwo.component.js.map