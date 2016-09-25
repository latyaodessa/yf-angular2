export class PhotoForSave{
    photo_url:string;
    user_id:number;
    date:string;
    note:string;
    ph:string;
    md:string
    post_id:number;

    constructor( photo_url:string, user_id:number, date:string, note:string,ph:string, md:string, post_id:number){
        this.photo_url = photo_url;
        this.user_id = user_id;
        this.date = date;
        this.note = note;
        this.ph = ph;
        this.md = md;
        this.post_id = post_id;
    }
}