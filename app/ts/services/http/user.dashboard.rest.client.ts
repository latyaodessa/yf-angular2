import { Injectable }     from '@angular/core';
import {SetupConfig} from './../../config/setup.config'
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import {PostForSave} from './../../objects/user/dtos/post.for.save.dto';
import {PhotoForSave} from './../../objects/user/dtos/photo.for.save.dto';
import {YFUserHandler} from './../handlers/yf.user.handlers'



@Injectable()
export class UserDashboardRestClient{
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    savePostToDashboardPath = () =>  [SetupConfig.YF_HOST, SetupConfig.YF_MODULE, SetupConfig.REST_BASIS,
        SetupConfig.REST_PATH_USER, SetupConfig.REST_METHOD_SAVE, SetupConfig.REST_DASHBOARD_POST].join("/");

    deletePostFromDashboardPath = (user_id:number, post_id:number) => [SetupConfig.YF_HOST, SetupConfig.YF_MODULE, SetupConfig.REST_BASIS,
    SetupConfig.REST_PATH_USER, SetupConfig.REST_METHOD_DELETE, SetupConfig.REST_DASHBOARD_POST].join("/") + '/?' + SetupConfig.REST_DASHBOARD_QUERY_PARAMETER_USER_ID + "=" + user_id + "&" + SetupConfig.REST_DASHBOARD_QUERY_PARAMETER_POST_ID + "=" + post_id;


    deletePhotoFromDashboardPath = (user_id:number, photo_id:number) => [SetupConfig.YF_HOST, SetupConfig.YF_MODULE, SetupConfig.REST_BASIS,
        SetupConfig.REST_PATH_USER, SetupConfig.REST_METHOD_DELETE, SetupConfig.REST_DASHBOARD_PHOTO].join("/") + '/?' + SetupConfig.REST_DASHBOARD_QUERY_PARAMETER_USER_ID + "=" + user_id + "&" + SetupConfig.REST_DASHBOARD_QUERY_PARAMETER_PHOTO_ID + "=" + photo_id;



    isPostAlreadySavedToUserPath = (user_id:number, post_id:number) =>  [SetupConfig.YF_HOST, SetupConfig.YF_MODULE, SetupConfig.REST_BASIS,
        SetupConfig.REST_PATH_USER, SetupConfig.REST_METHOD_SAVE, SetupConfig.REST_DASHBOARD_POST].join("/") + '/' + user_id + '/' + post_id;

    savePhotoToUserDashboardPath = () =>  [SetupConfig.YF_HOST, SetupConfig.YF_MODULE, SetupConfig.REST_BASIS,
        SetupConfig.REST_PATH_USER, SetupConfig.REST_METHOD_SAVE, SetupConfig.REST_DASHBOARD_PHOTO].join("/");


    constructor(private http:Http, private yFUserHandler:YFUserHandler){}

    savePostToUserDashboard(postForSave:PostForSave){
        return this.http.post(this.savePostToDashboardPath(),postForSave, this.options)
            .map(this.yFUserHandler.extractData)
            .catch(this.yFUserHandler.handleError);
    }
    savePhotoToUserDashboard(photoForSave:PhotoForSave){
        return this.http.post(this.savePhotoToUserDashboardPath(), photoForSave, this.options)
            .map(this.yFUserHandler.extractData)
            .catch(this.yFUserHandler.handleError);
    }

    isPostAlreadySavedToUser(user_id:number, post_id:number){
        return this.http.get(this.isPostAlreadySavedToUserPath(user_id, post_id))
            .map(this.yFUserHandler.extractBoolean)
            .catch(this.yFUserHandler.handleError);
    }



    deletePostById(user_id:number, post_id:number){
        return this.http.delete(this.deletePostFromDashboardPath(user_id, post_id))
            .map(this.yFUserHandler.extractData)
            .catch(this.yFUserHandler.handleError);
    }

    deletePhotoById(user_id:number, photo_id:number){
        return this.http.delete(this.deletePhotoFromDashboardPath(user_id, photo_id))
            .map(this.yFUserHandler.extractData)
            .catch(this.yFUserHandler.handleError);
    }


}