export class Photo {
    access_key:string;
    album_id:string;
    date:string;
    height:string;
    id:number;
    owner_id:string;
    photo_75:string;
    photo_130:string;
    photo_604:string;
    photo_807:string;
    photo_1280:string;
    photo_2560:string;
    text:string;
    user_id:number;
    width:number;

    constructor(access_key:string, album_id:string, date:string, height:string, id:number, owner_id:string,
                photo_75:string, photo_130:string, photo_604:string, photo_807:string, photo_1280:string, photo_2560:string,
                text:string, user_id:number, width:number){
        this.access_key = access_key;
        this.album_id = album_id;
        this.date = date;
        this.height = height;
        this.id = id;
        this.owner_id = owner_id;
        this.photo_75 = photo_75;
        this.photo_130 = photo_130;
        this.photo_604 = photo_604;
        this.photo_807 = photo_807;
        this.photo_1280 = photo_1280;
        this.photo_2560 = photo_2560;
        this.text = text;
        this.user_id = user_id;
        this.width = width;
    }
    public getPhoto_75 = () => this.photo_75;
    public getPhoto_130 = () => this.photo_130;
    public getPhoto_604 = () => this.photo_604;
    public getPhoto_807 = () => this.photo_807;
    public getPhoto_1280 = () => this.photo_1280;
    public getPhoto_2560 = () => this.photo_2560;

}