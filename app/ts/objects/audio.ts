export class Audio {
    album_id:number;
    artist:string;
    date:string;
    duration:string;
    genre_id:number;
    id:string;
    lyrics_id:number;
    owner_id:string;
    title:string;
    url:string;
    constructor( album_id:number, artist:string, date:string, duration:string,
                 genre_id:number, id:string, lyrics_id:number, owner_id:string,
                 title:string, url:string){

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
}