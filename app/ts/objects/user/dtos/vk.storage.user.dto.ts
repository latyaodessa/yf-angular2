export class VKStorageUserDTO {
    id:number;
    first_name:string;
    last_name:string;
    photo_50:string;
    type:string;

    constructor(id:number,first_name:string, last_name:string,photo_50:string,type:string ){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.photo_50 = photo_50;
        this.type = type;


    }
}