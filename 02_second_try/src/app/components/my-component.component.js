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
var MyComponent = (function () {
    function MyComponent() {
        this.title = "Hello WALRD";
        this.imageLink = 'http://lorempixel.com/400/200';
        this.note;
    }
    MyComponent.prototype.runClick = function () {
        console.log('YOU CLICKED ME');
    };
    MyComponent.prototype.saySomething = function (e) {
        console.log(e);
        console.log(e.target.value);
    };
    return MyComponent;
}());
MyComponent = __decorate([
    core_1.Component({
        selector: 'my-component',
        template: "\n\t\t<h1>My New Component {{title}}</h1>\n\t\t<img [src]='imageLink'/>\n\t\t<br/>\n\t\t<button (click)=\"runClick()\">Click Me</button>\n\t\t<br/>\n\t\t<input type='text' [(ngModel)]=\"note\" (keyup.enter)=\"saySomething($event)\">\n\t\t{{note}}",
    }),
    __metadata("design:paramtypes", [])
], MyComponent);
exports.MyComponent = MyComponent;
//# sourceMappingURL=my-component.component.js.map