import {VKUserCityCountry} from './vk.user.city.country';
export class VKUserDetails {
    id:number;
    first_name:string;
    last_name:string;
    sex:number;
    nickname:string;
    maiden_name:string;
    bdate:string;
    photo_50:string;
    photo_100:string;
    photo_200_orig:string;
    photo_200:string;
    photo_400_orig:string;
    site:string;
    verified:number;
    followers_count:number;
    interests:string;
    music:string;
    activities:string;
    movies:string;
    books:string;
    games:string;
    about:string;
    quotes:string;
    city:VKUserCityCountry;
    country:VKUserCityCountry;



    constructor(id:number,first_name:string, last_name:string, sex:number, nickname:string, maiden_name:string,
                bdate:string, photo_50:string, photo_100:string, photo_200_orig:string, photo_200:string, photo_400_orig:string,
                site:string, verified:number, followers_count:number, interests:string, music:string, activities:string,
                movies:string, books:string, games:string, about:string, quotes:string, city:VKUserCityCountry, country:VKUserCityCountry){

        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.sex = sex;
        this.nickname = nickname;
        this.maiden_name = maiden_name;
        this.bdate = bdate;
        this.photo_50 = photo_50;
        this.photo_100 = photo_100;
        this.photo_200_orig = photo_200_orig;
        this.photo_200 = photo_200;
        this.photo_400_orig = photo_400_orig;
        this.site = site;
        this.verified = verified;
        this.followers_count = followers_count;
        this.interests = interests;
        this.music = music;
        this.activities = activities;
        this.movies = movies;
        this.books = books;
        this.games = games;
        this.about = about;
        this.quotes = quotes;
        this.city = city;
        this.country = country;

    }


}