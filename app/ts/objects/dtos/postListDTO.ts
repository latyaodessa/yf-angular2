export class PostListDTO {
    id:number;
    md:string;
    ph:string;
    text:string;
    thumbnail:string;

    constructor( id:number, md:string, ph:string,text:string, thumbnail:string){
        this.id = id;
        this.md = md;
        this.ph = ph;
        this.text = text;
        this.thumbnail = thumbnail;
    }
}