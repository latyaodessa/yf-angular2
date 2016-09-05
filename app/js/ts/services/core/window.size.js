"use strict";
var Rx_1 = require('rxjs/Rx');
var WindowSize = (function () {
    function WindowSize() {
        var windowSize$ = new Rx_1.BehaviorSubject(getWindowSize());
        this.width$ = windowSize$.pluck('width').distinctUntilChanged();
        this.height$ = windowSize$.pluck('height').distinctUntilChanged();
        Rx_1.Observable.fromEvent(window, 'resize')
            .map(getWindowSize)
            .subscribe(windowSize$);
    }
    return WindowSize;
}());
exports.WindowSize = WindowSize;
function getWindowSize() {
    return {
        height: window.innerHeight,
        width: window.innerWidth
    };
}
//# sourceMappingURL=window.size.js.map