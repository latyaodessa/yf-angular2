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
var general_user_1 = require('./../../objects/user/general.user');
var core_1 = require('@angular/core');
var UserWorkflow = (function () {
    function UserWorkflow() {
        this.vkUserToGeneralUser = function (id) { return new general_user_1.GeneralUser(id, null, 'vk', false); };
    }
    UserWorkflow = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserWorkflow);
    return UserWorkflow;
}());
exports.UserWorkflow = UserWorkflow;
//# sourceMappingURL=user.workflow.js.map