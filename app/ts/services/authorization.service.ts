import {ElasticClient} from './http/elastic.client.service';
import {YFUserHandler} from './handlers/yf.user.handlers';
import {VKRestClient} from './http/vk.rest.client';
import {SetupConfig} from './../config/setup.config';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ElasticUserClient} from './http/elastic.user.client.service';
import {VKUserDetails} from './../objects/user/vk.details.user'
import {GeneralUser} from './../objects/user/general.user'


@Injectable()
export class AuthorizationService {
    private params:string;
    private generalUser:GeneralUser;
    constructor(private http:Http, private elasticClient:ElasticClient, private yFUserHandler:YFUserHandler, private vkRestClient:VKRestClient, private elasticUserClient:ElasticUserClient){}

    getToken(){
        return this.params.match(/^(.*?)&/)[1].replace('#access_token=', '');
    }
    getExpiresTime(){
        return this.params.match(/expires_in=([0-9]*)/)[1].replace('expires_in=', '');
    }
    getUserId(){
        return this.params.match(/user_id=([0-9]*)/)[1].replace('user_id=', '');
    }

    authorizeUser(prams:string, from:string){
        this.params = prams;
        this.getGeneralUserDataById(this.getUserId()).subscribe( user  => {
            if(user){
                this.generalUser = user;
                this.setLocalStorageGeneralUser();
                this.defineUserType(from);
            } else {
                this.createNewVKUser(this.getUserId()).subscribe( vkUser  => {
                    this.generalUser = vkUser;
                    this.setLocalStorageGeneralUser();
                    this.defineUserType(from);
                });
            }
        })
    }

    defineUserType(from:string){
        if(from == 'vk'){
            console.log(from);
            this.setLocalStorageVKUser();
        }
    }

    setLocalStorageGeneralUser(){
        localStorage.clear();
        localStorage.setItem(SetupConfig.TOKEN_KEY_NAME, this.getToken());
        localStorage.setItem(SetupConfig.EXPIRES_IN_NAME, this.getExpiresTime());
        localStorage.setItem(SetupConfig.USER_ID_NAME,this.getUserId());
        localStorage.setItem(SetupConfig.USER_TYPE_NAME, this.generalUser.type);
    }
    setLocalStorageVKUser(){
      this.getVKUserDetailsByIdELASTIC(this.getUserId()).subscribe( vkUser  => {
          let vKUserDetails:VKUserDetails = vkUser[0];
          localStorage.setItem(SetupConfig.FIRST_NAME_KEY_NAME, vKUserDetails.first_name);
          localStorage.setItem(SetupConfig.LAST_NAME_KEY_NAME, vKUserDetails.last_name);
          localStorage.setItem(SetupConfig.PHOTO_50_KEY_NAME, vKUserDetails.photo_50);

      })
    }


    getGeneralUserDataById(userId:number){
        return this.http.get(this.vkRestClient.getGeneralUserById(userId))
            .map(this.yFUserHandler.extractData)
            .catch(this.yFUserHandler.handleError);
    }

    getVKUserDetailsByIdELASTIC(userId:number){
        return this.http.get(this.elasticUserClient.findVKUserById(userId))
            .map(this.yFUserHandler.extractDataFromElastic)
            .catch(this.yFUserHandler.handleError);
    }

    createNewVKUser(userId:number){

        return this.http.post(this.vkRestClient.createNewVKUser(userId))
            .map(this.yFUserHandler.extractData)
            .catch(this.yFUserHandler.handleError);

    }

}
