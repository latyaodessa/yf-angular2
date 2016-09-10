import {ElasticInterface} from  './elastic.client.interface';
import { Injectable }     from '@angular/core';
import {SetupConfig} from './../../config/setup.config'

@Injectable()
export class ElasticUserClient {
    public static HOST:string = SetupConfig.ELASTIC_HOST;
    public static VK_USER_INDEX:string =  ElasticUserClient.HOST + 'vk-user/_search?';

    public static SEARCH_BY_ID = 'q=_id:';

    findVKUserById = (id:number) =>  ElasticUserClient.VK_USER_INDEX + ElasticUserClient.SEARCH_BY_ID + id;

}