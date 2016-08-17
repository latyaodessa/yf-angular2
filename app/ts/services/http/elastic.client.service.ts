import {ElasticInterface} from  './elastic.client.interface';
import { Injectable }     from '@angular/core';


@Injectable()
export class ElasticClient implements ElasticInterface{
    public static HOST:string = 'http://10.0.0.37:9200/';
    public static NATIVE_INDEX:string = ElasticClient.HOST + 'yf-photo-native/_search?';
    public static SETS_INDEX:string = ElasticClient.HOST + 'yf-photo-sets/_search?';

    public static NATIVE_TOP_INDEX:string = ElasticClient.HOST + 'yf-native-top/_search?';
    public static SETS_TOP_INDEX:string = ElasticClient.HOST + 'yf-sets-top/_search?';



    public static DESC_BY_ID:string = '&sort=id:desc';
    public static DESC_BY_LIKES:string = '&sort=likes:desc';


    getSize = (size:number) => '&size='+size;
    getFrom = (from:number) => '&from='+from;


    getNewYFNative = (from:number, size:number) => ElasticClient.NATIVE_INDEX + this.getFrom(from) + this.getSize(size) + ElasticClient.DESC_BY_ID;
    getNewYFSets = (from:number, size:number) => ElasticClient.SETS_INDEX + this.getFrom(from) + this.getSize(size) + ElasticClient.DESC_BY_ID;

    getYFNativeTop = (from:number, size:number) => ElasticClient.NATIVE_TOP_INDEX + this.getFrom(from) + this.getSize(size) + ElasticClient.DESC_BY_LIKES;
    getYFSetsTop = (from:number, size:number) => ElasticClient.SETS_TOP_INDEX + this.getFrom(from) + this.getSize(size) + ElasticClient.DESC_BY_LIKES;


}
