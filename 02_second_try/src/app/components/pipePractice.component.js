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
var core_1 = require("@angular/core");
var filter_pipe_1 = require("../filter.pipe");
var PipePracticeComponent = (function () {
    function PipePracticeComponent() {
        this.heroes = [
            {
                "name": "James Howlett",
                "codeName": "Wolverine"
            },
            {
                "name": "Kitty Pride",
                "codeName": "ShadowCat"
            },
            {
                "name": "Scott Summers",
                "codeName": "Cyclops"
            },
            {
                "name": "Ororo Munroe",
                "codeName": "Storm"
            },
            {
                "name": "Peter Rasputin",
                "codeName": "Colossus"
            },
            {
                "name": "Illyana Rasputin",
                "codeName": "Magik"
            },
        ];
        this.name = "Michael Jordan";
        this.sidekick = "Robin";
        this.robinkick = "NightWing";
        this.birthday = new Date(1988, 29, 10);
        this.price = 8000;
    }
    return PipePracticeComponent;
}());
PipePracticeComponent = __decorate([
    core_1.Component({
        selector: 'pipe-practice',
        template: "\n\t\t<h1>Learning Some Pipes with {{name}}</h1>\n\t\t<h3>My Sidekick is {{sidekick | uppercase}} </h3>\n\t\t<h3>Robins Sidekick is {{robinkick | lowercase}}</h3>\n\t\t<h3> It's my birthday on {{birthday | date}} </h3>\n\t\t<h3> It's my birthday on {{birthday | date: 'shortDate'}} </h3>\n\t\t<h3> It's my birthday on {{birthday | date: 'longDate'}} </h3>\n\t\t<h3> It's my birthday on {{birthday | date: 'shortTime'}} </h3>\n\t\t<h3> I will help you for {{price | currency: 'USD'}} </h3>\n\t\t<h3> I will help you for {{price | currency: 'USD':\"true\"}} </h3>\n\t\t<h3> I will help you for {{price | currency: 'GBP':\"true\"}} </h3>\n\t\t<hr/>\n\t\t<h2>Now build your own custom shit</h2>\n\t\t<ul>\n\t\t\t<ul *ngFor=\"let hero of heroes\">\n\t\t\t\t<li>{{hero.name}}</li>\n\t\t\t\t<li>{{hero.codeName}}</li>\n\t\t\t</ul>\n\t\t</ul>\n\t\t",
        pipes: [filter_pipe_1.FilterArrayPipe]
    }),
    __metadata("design:paramtypes", [])
], PipePracticeComponent);
exports.PipePracticeComponent = PipePracticeComponent;
//# sourceMappingURL=pipePractice.component.js.map