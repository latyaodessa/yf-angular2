import {Injectable, Input, Output, EventEmitter} from '@angular/core';

import {SetupConfig} from './../../config/setup.config';
import {VKStorageUserDTO} from './../../objects/user/dtos/vk.storage.user.dto';
import {ContentProperties} from './../../config/content.properties'

@Injectable()
export class StorageService {

    @Output() isLoggedIn = new EventEmitter();
    @Output() userDTO = new EventEmitter();


    checkIsUserLoggedIn = () => {
      this.isLoggedIn.emit(localStorage.getItem(SetupConfig.USER_ID_NAME) ? true : false);
}
    getVkUserDTO = () => {
        this.userDTO.emit(new VKStorageUserDTO(this.getUserId(),this.getUserFirstName(),this.getUserLastName(),this.getUserPhoto_50(),this.getUserType()));
    }

    logout(){
        localStorage.clear();
        sessionStorage.clear();
        this.checkIsUserLoggedIn();
    }

    getEmittedLoginStatus()
    {
        return this.isLoggedIn;
    }

    getEmittedvkUserDTO(){
        return this.userDTO;
    }

    getCurrentLoginStatus = () => localStorage.getItem(SetupConfig.USER_ID_NAME) ? true : false;

    getUserDTO = () => {
        if(this.getUserType() == ContentProperties.VK_USER){ return this.getVkUserDTO(); }
    }



    getUserId = () =>  localStorage.getItem(SetupConfig.USER_ID_NAME);
    getUserFirstName = () =>  localStorage.getItem(SetupConfig.FIRST_NAME_KEY_NAME);
    getUserLastName = () =>  localStorage.getItem(SetupConfig.LAST_NAME_KEY_NAME);
    getUserPhoto_50= () =>  localStorage.getItem(SetupConfig.THUMBNAIL);
    getUserType= () =>  localStorage.getItem(SetupConfig.USER_TYPE_NAME);



}