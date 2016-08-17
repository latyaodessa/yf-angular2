export class Video {
    access_key:string;
    can_add:number;
    comments:number;
    date:string;
    description:string;
    duration:number;
    id:number;
    owner_id:number;
    photo_130:string;
    photo_320:string;
    photo_640:string;
    title:string;
    views:number;

    constructor(access_key:string, can_add:number, comments:number,
                date:string, description:string, duration:number,
                id:number, owner_id:number, photo_130:string, photo_320:string,
                photo_640:string, title:string, views:number){

        this.access_key = access_key;
        this.can_add = can_add;
        this.comments = comments;
        this.date = date;
        this.description = description;
        this.duration = duration;
        this.id = id;
        this.owner_id = owner_id;
        this.photo_130 = photo_130;
        this.photo_320 = photo_320;
        this.photo_640 = photo_640;
        this.title = title;
        this.views = views;

    }
}