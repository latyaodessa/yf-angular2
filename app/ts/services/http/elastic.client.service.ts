import {ElasticInterface} from  './elastic.client.interface';
import { Injectable }     from '@angular/core';
import {SetupConfig} from './../../config/setup.config'

@Injectable()
export class ElasticClient implements ElasticInterface{
    //public static HOST:string = 'http://raspberrypi.local:9200/';
    public static HOST:string = SetupConfig.ELASTIC_HOST;


    public static NATIVE_INDEX:string = ElasticClient.HOST + 'yf-photo-native/_search?';
    public static EXTERNAL_ART_INDEX:string = ElasticClient.HOST + 'external-art/_search?';
    public static ART_INDEX:string = ElasticClient.HOST + 'yf-photo-art/_search?';
    public static SETS_INDEX:string = ElasticClient.HOST + 'yf-photo-sets/_search?';
    public static SILHOUETTES_INDEX:string = ElasticClient.HOST + 'yf-photo-silhouettes/_search?';
    //Dashboard
    public static USER_SAVED_POSTS_INDEX:string = ElasticClient.HOST + 'user-saved-post/_search?';
    public static USER_SAVED_PHOTOS_INDEX:string = ElasticClient.HOST + 'user-saved-photo/_search?';



    public static NATIVE_TOP_INDEX:string = ElasticClient.HOST + 'yf-native-top/_search?';
    public static SETS_TOP_INDEX:string = ElasticClient.HOST + 'yf-sets-top/_search?';

    public static SEARCH_ALL_INDEX:string =  ElasticClient.HOST + '/_search?';

    public static SEARCH_BY_ID = 'q=_id:';
    public static SEARCH_BY_TEXT= '&q=text:';
    public static SEARCH_BY_USER_ID = '&q=user_id:';



    public static DESC_BY_ID:string = '&sort=id:desc';
    public static DESC_BY_LIKES:string = '&sort=likes:desc';
    public static DESC_BY_DATE:string = '&sort=date:desc';


    getSize = (size:number) => '&size='+size;
    getFrom = (from:number) => '&from='+from;


    getNewYFNative = (from:number, size:number) => ElasticClient.NATIVE_INDEX + this.getFrom(from) + this.getSize(size) + ElasticClient.DESC_BY_ID;
    getNewYFArt = (from:number, size:number) => ElasticClient.ART_INDEX + this.getFrom(from) + this.getSize(size) + ElasticClient.DESC_BY_ID;
    getArtExternal = (from:number, size:number) => ElasticClient.EXTERNAL_ART_INDEX + this.getFrom(from) + this.getSize(size) + ElasticClient.DESC_BY_ID;
    getNewYFSets = (from:number, size:number) => ElasticClient.SETS_INDEX + this.getFrom(from) + this.getSize(size) + ElasticClient.DESC_BY_ID;

    getYFSilhouettesNew = (from:number, size:number) => ElasticClient.SILHOUETTES_INDEX + this.getFrom(from) + this.getSize(size) + ElasticClient.DESC_BY_ID;

    getYFSetsNativeNew = (from:number, size:number) => ElasticClient.SEARCH_ALL_INDEX + this.getFrom(from) + this.getSize(size) + ElasticClient.DESC_BY_ID;

    getYFNativeTop = (from:number, size:number) => ElasticClient.NATIVE_TOP_INDEX + this.getFrom(from) + this.getSize(size) + ElasticClient.DESC_BY_LIKES;
    getYFSetsTop = (from:number, size:number) => ElasticClient.SETS_TOP_INDEX + this.getFrom(from) + this.getSize(size) + ElasticClient.DESC_BY_LIKES;

    findPostById = (id:string) =>  ElasticClient.SEARCH_ALL_INDEX + ElasticClient.SEARCH_BY_ID + id;

    findByText = (from:number, size:number, textQuery:string) => ElasticClient.SEARCH_ALL_INDEX + ElasticClient.SEARCH_BY_TEXT + textQuery;


    //User Dashboard
    getSavedUserPosts = (from:number, size:number, userId:number) => ElasticClient.USER_SAVED_POSTS_INDEX + ElasticClient.SEARCH_BY_USER_ID  + userId+ this.getFrom(from) + this.getSize(size) + ElasticClient.DESC_BY_DATE;

    getSavedUserPhotos = (from:number, size:number, userId:number) => ElasticClient.USER_SAVED_PHOTOS_INDEX + ElasticClient.SEARCH_BY_USER_ID  + userId+ this.getFrom(from) + this.getSize(size) + ElasticClient.DESC_BY_DATE;
}
