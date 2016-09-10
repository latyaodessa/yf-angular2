import { Injectable }     from '@angular/core';
import {SetupConfig} from './../../config/setup.config'

@Injectable()
export class VKRestClient{

    private USER_REST_PATH = [SetupConfig.YF_HOST, SetupConfig.YF_MODULE, SetupConfig.REST_BASIS, SetupConfig.REST_PATH_USER];

    getGeneralUserById = (id:number) => [SetupConfig.YF_HOST, SetupConfig.YF_MODULE, SetupConfig.REST_BASIS,
                                        SetupConfig.REST_PATH_USER, SetupConfig.REST_METHOD_GET, id].join("/");



    createNewVKUser = (id:number) =>  [SetupConfig.YF_HOST, SetupConfig.YF_MODULE, SetupConfig.REST_BASIS,
        SetupConfig.REST_PATH_USER, SetupConfig.REST_PATH_VK ,SetupConfig.REST_METHOD_CREATE, id].join("/");


}
