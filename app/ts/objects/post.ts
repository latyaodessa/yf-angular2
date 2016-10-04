import {Audio} from './audio';
import {Photo} from './photo';
import {Video} from './video';

export class Post {
    id:number;
    from_id:string;
    date:string;
    text:string;
    md:string;
    ph:string;
    md_translit:string;
    ph_translit:string;
    signer_id:number;
    likes:number;
    reposts:number;
    postAudio:Array<Audio>;
    postPhoto:Array<Photo>;
    postVideo:Array<Video>;

    constructor(id:number, date:string, from_id:string,text:string,
                md:string,ph:string,md_translit:string,ph_translit:string,
                signer_id:number, likes:number, reposts:number, postAudio:Array<Audio>, postPhoto:Array<Photo>, postVideo:Array<Video>){
        this.id = id;
        this.date = date;
        this.from_id = from_id;
        this.text = text;
        this.md = md;
        this.ph = ph;
        this.md_translit = md_translit;
        this.ph_translit = ph_translit;
        this.signer_id = signer_id;
        this.likes = likes;
        this.reposts = reposts;
        this.postAudio = postAudio;
        this.postPhoto = postPhoto;
        this.postVideo = postVideo;
    }
    public getId = () => this.id;
    public getText = () => this.text;
    public getLikes = () => this.likes;
    public getPostPhoto=()=> this.postPhoto;

}

