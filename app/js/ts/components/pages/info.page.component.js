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
var router_1 = require('@angular/router');
var InfoPage = (function () {
    function InfoPage() {
        this.test = "<h1 style='color: red'>test</h1>";
    }
    InfoPage = __decorate([
        core_1.Component({
            selector: 'saved-photos-dashboard',
            templateUrl: 'app/ts/templates/pages/info.page.component.html',
            providers: [],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], InfoPage);
    return InfoPage;
}());
exports.InfoPage = InfoPage;
//# sourceMappingURL=info.page.component.js.map