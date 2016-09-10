"use strict";
var GeneralUser = (function () {
    function GeneralUser(id, email, type, userAuthorized) {
        this.id = id;
        this.email = email;
        this.type = type;
        this.userAuthorized = userAuthorized;
    }
    return GeneralUser;
}());
exports.GeneralUser = GeneralUser;
//# sourceMappingURL=general.user.js.map