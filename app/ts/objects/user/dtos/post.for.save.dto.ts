export class PostForSave{
    post_id:number;
    user_id:number;
    date:string;
    post_type:string;

    constructor( post_id:number, user_id:number, date:string, post_type:string){
        this.post_id = post_id;
        this.user_id = user_id;
        this.date = date;
        this.post_type = post_type;
    }
}