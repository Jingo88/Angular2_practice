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
var TempPracticeComponent = (function () {
    function TempPracticeComponent() {
        this.showHeading = true;
        this.name = "X-23";
        this.colors = ["red", "Blue", "Green"];
    }
    return TempPracticeComponent;
}());
TempPracticeComponent = __decorate([
    core_1.Component({
        selector: 'temp-practice',
        template: "\n\t\t<h1 *ngIf=\"showHeading\">Angular 2 Template Practice</h1>\n\t\t<span [ngSwitch]=\"name\">\n\t\t\t<span *ngSwitchCase=\"'X-23'\">X-23</span>\n\t\t\t<span *ngSwitchCase=\"'Storm'\">Storm</span>\n\t\t\t<span *ngSwitchCase=\"'Summer'\">Summer</span>\n\t\t\t<span *ngSwitchDefault>Not Here</span>\n\t\t</span>\n\t\t<br>\n\t\t<ul>\n\t\t\t<li *ngFor=\"let color of colors\">\n\t\t\t\t{{color}}\n\t\t\t</li>\n\t\t</ul>\n\t\t",
    }),
    __metadata("design:paramtypes", [])
], TempPracticeComponent);
exports.TempPracticeComponent = TempPracticeComponent;
//# sourceMappingURL=templatePractice.component.js.map