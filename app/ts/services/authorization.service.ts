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
import {UserWorkflow} from './workflow/user.workflow';
import {StorageService} from './authorization/storage.service'



@Injectable()
export class AuthorizationService {
    private params:string;
    private generalUser:GeneralUser;
    private vKUserDetails:VKUserDetails;
    constructor(private http:Http, private yFUserHandler:YFUserHandler, private vkRestClient:VKRestClient, private elasticUserClient:ElasticUserClient, private userWorkflow:UserWorkflow,private storageService:StorageService){}

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
                this.getVKUserDetailsByIdELASTIC(this.generalUser.id).subscribe( vkUser => {
                    this.vKUserDetails = vkUser

                    this.setSessionLocalStorageGeneralUser();
                    this.defineUserType(from);
                    this.storeUserDataInStorage();
                });

            } else {
                this.createNewVKUser(this.getUserId()).subscribe( vkUser  => {
                    this.vKUserDetails = vkUser;
                    this.generalUser = this.userWorkflow.vkUserToGeneralUser(this.vKUserDetails.id);
                    this.setSessionLocalStorageGeneralUser();
                    this.defineUserType(from);
                    this.storeUserDataInStorage();

                });
            }
        })
    }

    storeUserDataInStorage(){
        this.storageService.checkIsUserLoggedIn();
        this.storageService.getVkUserDTO();
    }

    defineUserType(from:string){
        if(from == 'vk'){
            this.setLocalStorageVKUser();
        }
    }

    setSessionLocalStorageGeneralUser(){
        localStorage.clear();
        sessionStorage.clear();
        sessionStorage.setItem(SetupConfig.TOKEN_KEY_NAME, this.getToken());
        sessionStorage.setItem(SetupConfig.EXPIRES_IN_NAME, this.getExpiresTime());

        localStorage.setItem(SetupConfig.USER_ID_NAME,this.getUserId());
        localStorage.setItem(SetupConfig.USER_TYPE_NAME, this.generalUser.type);
    }
    setLocalStorageVKUser(){
          localStorage.setItem(SetupConfig.FIRST_NAME_KEY_NAME, this.vKUserDetails.first_name);
          localStorage.setItem(SetupConfig.LAST_NAME_KEY_NAME, this.vKUserDetails.last_name);
          localStorage.setItem(SetupConfig.THUMBNAIL, this.vKUserDetails.photo_200);

        window.location.href='/dashboard';


    }


    getGeneralUserDataById(userId:string){
        return this.http.get(this.vkRestClient.getGeneralUserById(userId))
            .map(this.yFUserHandler.extractData)
            .catch(this.yFUserHandler.handleError);
    }

    getVKUserDetailsByIdELASTIC(userId:number){
        return this.http.get(this.elasticUserClient.findVKUserById(userId))
            .map(this.yFUserHandler.extractDataFromElastic)
            .catch(this.yFUserHandler.handleError);
    }

    createNewVKUser(userId:string){

        return this.http.post(this.vkRestClient.createNewVKUser(userId),"")
            .map(this.yFUserHandler.extractData)
            .catch(this.yFUserHandler.handleError);

    }

}
