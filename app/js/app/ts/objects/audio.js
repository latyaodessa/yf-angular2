"use strict";
var Audio = (function () {
    function Audio(album_id, artist, date, duration, genre_id, id, lyrics_id, owner_id, title, url) {
        this.album_id = album_id;
        this.artist = artist;
        this.date = date;
        this.duration = duration;
        this.genre_id = genre_id;
        this.id = id;
        this.lyrics_id = lyrics_id;
        this.owner_id = owner_id;
        this.title = title;
        this.url = url;
    }
    return Audio;
}());
exports.Audio = Audio;
//# sourceMappingURL=audio.js.map