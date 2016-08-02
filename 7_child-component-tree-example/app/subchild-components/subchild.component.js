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
var subchildComponent = (function () {
    function subchildComponent() {
        this.foo = function (item) {
            alert("you clicked on " + item);
        };
        this.names = ["angular", "dart", "typeScript", "javascript"];
    }
    subchildComponent = __decorate([
        core_1.Component({
            selector: 'baby',
            template: "\n            <div class=\"sub-child\">\n              <h3>i'm cute subchild baby component</h3>\n              <p>\n                 i can sit in any other component,<br>\n                 and can also keep another small or large component in my abdomen\n              </p>\n              \n            </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], subchildComponent);
    return subchildComponent;
}());
exports.subchildComponent = subchildComponent;
//# sourceMappingURL=subchild.component.js.map