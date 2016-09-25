import {HandlerInterface} from "./handlers.interface";
import {Observable} from 'rxjs/Observable';
import { Response } from '@angular/http';
import {SetupConfig} from './../../config/setup.config';
import {VKUserDetails} from './../../objects/user/vk.details.user'


export class YFUserHandler implements HandlerInterface{
    private vKUserDetails:VKUserDetails[];
    private vKUserDetails_one:VKUserDetails;

    extractData(res:Response) {
        if(res.status == SetupConfig.RES_NO_CONTENT_204){
            return null;
        }
        return res.json() || {};
    }

    extractBoolean(res:Response) {
        if(res.status == SetupConfig.RES_NO_CONTENT_204){
            return null;
        }
        return Boolean(res.json());
    }


    extractDataFromElastic = (res:Response)  => res.json().hits.hits[0]._source;

    handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead TO DO TO SERVER
        return Observable.throw(errMsg);
    }
}