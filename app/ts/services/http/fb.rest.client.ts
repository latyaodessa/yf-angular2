import { Injectable }     from '@angular/core';
import {SetupConfig} from './../../config/setup.config'
import {YFUserHandler} from './../handlers/yf.user.handlers';
import { Http, Response, Headers, RequestOptions} from '@angular/http';


@Injectable()
export class FBRestClient{

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http:Http, private yFUserHandler:YFUserHandler){}

    getGeneralUserById = (id:string) => [SetupConfig.YF_HOST, SetupConfig.YF_MODULE, SetupConfig.REST_BASIS,
        SetupConfig.REST_PATH_USER, SetupConfig.REST_METHOD_GET, id].join("/");

    createNewFBUserPath = () =>  [SetupConfig.YF_HOST, SetupConfig.YF_MODULE, SetupConfig.REST_BASIS,
        SetupConfig.REST_PATH_USER, SetupConfig.REST_PATH_FB ,SetupConfig.REST_METHOD_CREATE].join("/");



    createNewFBUser(result:any){
        return this.http.post(this.createNewFBUserPath(),result, this.options)
            .map(this.yFUserHandler.extractData)
            .catch(this.yFUserHandler.handleError);

    }

    getGeneralUserDataById(userId:string){
        return this.http.get(this.getGeneralUserById(userId))
            .map(this.yFUserHandler.extractData)
            .catch(this.yFUserHandler.handleError);
    }

}