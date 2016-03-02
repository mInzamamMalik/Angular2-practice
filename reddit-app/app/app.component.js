System.register(['angular2/core', './app.redit'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_redit_1;
    var ArticleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_redit_1_1) {
                app_redit_1 = app_redit_1_1;
            }],
        execute: function() {
            ArticleComponent = (function () {
                function ArticleComponent() {
                    this.articles = [new app_redit_1.Article('', '', 0)];
                }
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        directives: [app_redit_1.Article],
                        template: "\n        <form class=\"ui large form segment\">\n            <h3 class=\"ui header\">Add a Link</h3>\n\n            <div class=\"field\">\n                <label for=\"title\">Title:</label>\n                <input name=\"title\" #newtitle>\n            </div>\n            \n            <div class=\"field\">\n                <label for=\"link\">Link:</label>\n                <input name=\"link\" #newlink>\n            </div>\n\n            <button (click)=\"addArticle(newtitle, newlink)\" class=\"ui positive right floated button\">\n                Submit link\n            </button>\n        </form>\n\n        <div class=\"ui grid posts\">\n            <reddit-article *ngFor=\"#article of sortedArticles()\" [article]=\"article\">   </reddit-article>\n        </div>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleComponent);
                return ArticleComponent;
            }());
            exports_1("ArticleComponent", ArticleComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map