"use strict";
var DateTimeService = (function () {
    function DateTimeService() {
        var _this = this;
        this.dateTime = new Date();
        this.getCurrentDateTime = function () {
            return _this.dateTime.toISOString();
        };
    }
    return DateTimeService;
}());
exports.DateTimeService = DateTimeService;
//# sourceMappingURL=date.time.service.js.map