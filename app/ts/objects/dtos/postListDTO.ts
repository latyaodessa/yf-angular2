export class PostListDTO {
    id:number;
    md:string;
    ph:string;
    thumbnail:string;
    //constructor(){
    //}
    constructor( id:number, md:string, ph:string,thumbnail:string){
        this.id = id;
        this.md = md;
        this.ph = ph;
        this.thumbnail = thumbnail;
    }
}