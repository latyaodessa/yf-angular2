export class PostDetailsDTO {
    id:number;
    text:string;
    md:string;
    ph:string;
    photos:string[];

    constructor(id:number, text:string, md:string, ph:string,photos:string[]){
        this.id = id;
        this.text = text;
        this.md = md;
        this.ph = ph;
        this.photos = photos;
    }
}