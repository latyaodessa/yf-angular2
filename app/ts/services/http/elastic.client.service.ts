import {ElasticInterface} from  './elastic.client.interface';
import { Injectable }     from '@angular/core';


@Injectable()
export class ElasticClient implements ElasticInterface{
    public static HOST:string = 'http://raspberrypi.local:9200/';


    public static NATIVE_INDEX:string = ElasticClient.HOST + 'yf-photo-native/_search?';
    public static SETS_INDEX:string = ElasticClient.HOST + 'yf-photo-sets/_search?';

    public static NATIVE_TOP_INDEX:string = ElasticClient.HOST + 'yf-native-top/_search?';
    public static SETS_TOP_INDEX:string = ElasticClient.HOST + 'yf-sets-top/_search?';

    public static NATIVE_SETS_INDEX:string =  ElasticClient.HOST + 'yf-photo-native,yf-photo-sets/_search?';

    public static SEARCH_BY_ID = 'q=_id:';
    public static SEARCH_BY_TEXT= '&q=text:';


    public static DESC_BY_ID:string = '&sort=id:desc';
    public static DESC_BY_LIKES:string = '&sort=likes:desc';


    getSize = (size:number) => '&size='+size;
    getFrom = (from:number) => '&from='+from;


    getNewYFNative = (from:number, size:number) => ElasticClient.NATIVE_INDEX + this.getFrom(from) + this.getSize(size) + ElasticClient.DESC_BY_ID;
    getNewYFSets = (from:number, size:number) => ElasticClient.SETS_INDEX + this.getFrom(from) + this.getSize(size) + ElasticClient.DESC_BY_ID;

    getYFSetsNativeNew = (from:number, size:number) => ElasticClient.NATIVE_SETS_INDEX + this.getFrom(from) + this.getSize(size) + ElasticClient.DESC_BY_ID;

    getYFNativeTop = (from:number, size:number) => ElasticClient.NATIVE_TOP_INDEX + this.getFrom(from) + this.getSize(size) + ElasticClient.DESC_BY_LIKES;
    getYFSetsTop = (from:number, size:number) => ElasticClient.SETS_TOP_INDEX + this.getFrom(from) + this.getSize(size) + ElasticClient.DESC_BY_LIKES;

    findNativeById = (id:string) =>  ElasticClient.NATIVE_SETS_INDEX + ElasticClient.SEARCH_BY_ID + id;

    findByText = (from:number, size:number, textQuery:string) => ElasticClient.NATIVE_SETS_INDEX + ElasticClient.SEARCH_BY_TEXT + textQuery;



}
