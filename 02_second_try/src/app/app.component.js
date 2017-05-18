"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var my_component_component_1 = require("./components/my-component.component");
var templatePractice_component_1 = require("./components/templatePractice.component");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'James Howlett';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  \t<h1>Hello {{name}}</h1>\n  \t<pipe-practice></pipe-practice>\n  \t<hr/>\n  \t<temp-practice></temp-practice>\n  \t<hr/>\n  \t<my-component></my-component>  \t\n  \t",
        directives: [my_component_component_1.MyComponent, templatePractice_component_1.TempPracticeComponent]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map