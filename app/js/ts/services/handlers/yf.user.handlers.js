"use strict";
var Observable_1 = require('rxjs/Observable');
var setup_config_1 = require('./../../config/setup.config');
var YFUserHandler = (function () {
    function YFUserHandler() {
        this.extractDataFromElastic = function (res) { return res.json().hits.hits[0]._source; };
    }
    YFUserHandler.prototype.extractData = function (res) {
        if (res.status == setup_config_1.SetupConfig.RES_NO_CONTENT_204) {
            return null;
        }
        return res.json() || {};
    };
    YFUserHandler.prototype.extractBoolean = function (res) {
        if (res.status == setup_config_1.SetupConfig.RES_NO_CONTENT_204) {
            return null;
        }
        return Boolean(res.json());
    };
    YFUserHandler.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead TO DO TO SERVER
        return Observable_1.Observable.throw(errMsg);
    };
    return YFUserHandler;
}());
exports.YFUserHandler = YFUserHandler;
//# sourceMappingURL=yf.user.handlers.js.map