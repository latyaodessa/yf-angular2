export class SinglePhotoListDTO {
    id:number;
    photo_url:string;
    user_id:number;
    date:string;
    note:string;
    //constructor(){
    //}
    constructor( id:number, photo_url:string, user_id:number, date:string, note:string){
        this.id = id;
        this.photo_url = photo_url;
        this.user_id = user_id;
        this.date = date;
        this.note = note;
    }
}