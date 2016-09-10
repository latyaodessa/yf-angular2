export class GeneralUser {
    id:number;
    email:string;
    type:string;
    userAuthorized:boolean;

    constructor(id:number, email:string, type:string, userAuthorized:boolean){
        this.id = id;
        this.email = email;
        this.type = type;
        this.userAuthorized = userAuthorized;
    }
}