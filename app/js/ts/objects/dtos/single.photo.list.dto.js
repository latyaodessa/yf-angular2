"use strict";
var SinglePhotoListDTO = (function () {
    //constructor(){
    //}
    function SinglePhotoListDTO(id, photo_url, user_id, date, note) {
        this.id = id;
        this.photo_url = photo_url;
        this.user_id = user_id;
        this.date = date;
        this.note = note;
    }
    return SinglePhotoListDTO;
}());
exports.SinglePhotoListDTO = SinglePhotoListDTO;
//# sourceMappingURL=single.photo.list.dto.js.map