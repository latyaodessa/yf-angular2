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
var SortingPipe = (function () {
    function SortingPipe() {
    }
    SortingPipe.prototype.transform = function (posts, args) {
        if (posts != null) {
        }
        return posts;
    };
    SortingPipe.prototype.quicksort = function (posts) {
        if (posts != null) {
            var left = [], right = [], pivot = posts[0].likes;
            for (var i = 1; i < posts.length; i++) {
                if (posts[i].likes < pivot)
                    left.push(posts[i]);
                else
                    right.push(posts[i]);
            }
            return this.quicksort(left).concat(pivot, this.quicksort(right));
        }
        else
            return [];
    };
    SortingPipe = __decorate([
        core_1.Pipe({ name: 'orderBy', pure: false }), 
        __metadata('design:paramtypes', [])
    ], SortingPipe);
    return SortingPipe;
}());
exports.SortingPipe = SortingPipe;
//# sourceMappingURL=sorting.pipe.js.map