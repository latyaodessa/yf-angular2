import { Injectable }     from '@angular/core';
import {ContentProperties} from './../../config/content.properties'
import {FBRestClient} from './../../services/http/fb.rest.client'
import {SetupConfig} from './../../config/setup.config'

declare const FB: any;

@Injectable()
export class FBSocialAuthorizationService {
    private accessToken:string;
    private expiresIn:string;

    constructor(private fbRestClient:FBRestClient){}

    authorizeWithFB() {
        FB.login((status: any) => {
            this.accessToken = status.authResponse.accessToken;
            this.expiresIn = status.authResponse.expiresIn;
            this.me();
        });
    }

    me() {
        FB.api('/me?fields=' + ContentProperties.FB_REQUESTED_FIELDS.join(','),
             (result) => {
                if (result && !result.error) {
                    this.authorizeFBUser(result);
                } else {
                    console.log(result.error);
                }
            });
    }

      authorizeFBUser(result:any){
          this.fbRestClient.getGeneralUserDataById(result.id).subscribe( generalUser  => {
              if(!generalUser){
                  this.createNewFBUser(result);
              } else {
                  this.setSessionLocalStorageGeneralUser(result);

              }



          });

    }
    createNewFBUser(result:any){
        this.fbRestClient.createNewFBUser(result).subscribe( fbUser  => {
            this.setSessionLocalStorageGeneralUser(fbUser);
        });

    }



    setSessionLocalStorageGeneralUser(result:any){
        localStorage.clear();
        sessionStorage.clear();
        sessionStorage.setItem(SetupConfig.TOKEN_KEY_NAME, this.accessToken);
        sessionStorage.setItem(SetupConfig.EXPIRES_IN_NAME, this.expiresIn);

        localStorage.setItem(SetupConfig.USER_ID_NAME, result.id);
        localStorage.setItem(SetupConfig.USER_TYPE_NAME,"fb");
        localStorage.setItem(SetupConfig.FIRST_NAME_KEY_NAME, result.first_name);
        localStorage.setItem(SetupConfig.LAST_NAME_KEY_NAME, result.last_name);
        localStorage.setItem(SetupConfig.THUMBNAIL, result.picture.data.url);

        window.location.href='/dashboard';


    }

}