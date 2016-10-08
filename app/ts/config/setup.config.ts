import {DataConfig} from './data.config';

export class SetupConfig{

    public static DOMAIN:string = window.location.hostname;


    //Routing
    public static SINGLE_POST_ROUTE ="post";
    public static NATIVE_LIST_ROUTE = "native";
    public static ART_LIST_ROUTE = "art";
    public static SETS_LIST_ROUTE = "sets";
    public static SILHOUETTES_LIST_ROUTE = "silhouettes";
    public static LOGIN_ROUTE = "login";
    public static DASHBOARD_ROUTE = "dashboard";
    public static SEARCH_ROUTE = "search";
    public static ART_ROUTE = "art";


    //Domains
    public static DOMAIN_PROD_RU = "youngfolks.ru";
    public static DOMAIN_PROD_ORG = "youngfolks.org";
    public static DOMAIN_DEV_LOCALHOST = "localhost";

    //TO SETUP

    public static TRANSLIT:boolean = SetupConfig.setupTranslit();
    public static ELASTIC_HOST:string = SetupConfig.setupElastic();
    public static YF_HOST:string = SetupConfig.setupYFHost();
    public static VK_AUTHORIZATION_LINK:string = SetupConfig.setupVKAutLink();

    public static GOOGLE_AN_ID:string = SetupConfig.setupGoogleID();
    public static GOOGLE_AN_MODE:string = SetupConfig.setupGoogleMode();






    public static YF_MODULE = "yf-services";
    public static REST_BASIS = "rest";
    public static REST_PATH_USER = "user";
    public static REST_METHOD_GET = "get";
    public static REST_PATH_VK = "vk";
    public static REST_PATH_FB = "fb";
    public static REST_METHOD_CREATE = "create";
    public static REST_METHOD_SAVE = "save";
    public static REST_METHOD_DELETE = "delete";
    public static REST_DASHBOARD_POST = "post";
    public static REST_DASHBOARD_PHOTO = "photo";


    public static REST_DASHBOARD_QUERY_PARAMETER_USER_ID = "user_id";
    public static REST_DASHBOARD_QUERY_PARAMETER_POST_ID = "post_id";
    public static REST_DASHBOARD_QUERY_PARAMETER_PHOTO_ID = "photo_id";




    //localStorage keys
    public static TOKEN_KEY_NAME = "token";
    public static EXPIRES_IN_NAME = "expires_in";
    public static USER_ID_NAME = "user_id";
    public static USER_TYPE_NAME = "user_type";

    public static FIRST_NAME_KEY_NAME = "first_name";
    public static LAST_NAME_KEY_NAME = "last_name";
    public static THUMBNAIL = "photo_50";




    //Response statuses
    public static RES_NO_CONTENT_204 = 204;




    public static setupElastic(){
        //console.log(window.location.hostname);


        if(SetupConfig.DOMAIN == SetupConfig.DOMAIN_PROD_RU || SetupConfig.DOMAIN == SetupConfig.DOMAIN_PROD_ORG) {
            return DataConfig.ELASTIC_HOST_PROD;
        }
        else if(SetupConfig.DOMAIN == SetupConfig.DOMAIN_DEV_LOCALHOST) {
            return DataConfig.ELASTIC_HOST_LOCALHOST;
        }
        else{
            return DataConfig.ELASTIC_HOST_PI;
        }
    }


    public static setupTranslit(){
        if(SetupConfig.DOMAIN == SetupConfig.DOMAIN_PROD_ORG) {
            return true;
        }
        else {
            return false;
        }
    }

    public static setupYFHost(){
        if(SetupConfig.DOMAIN == SetupConfig.DOMAIN_PROD_RU || SetupConfig.DOMAIN == SetupConfig.DOMAIN_PROD_ORG) {
            return DataConfig.YF_HOST_PROD;
        }
        else if(SetupConfig.DOMAIN == SetupConfig.DOMAIN_DEV_LOCALHOST) {
            return DataConfig.YF_HOST_LOCALHOST;
        }
        else{
            return DataConfig.YF_HOST_PI;
        }
    }

    public static setupVKAutLink(){
        if(SetupConfig.DOMAIN == SetupConfig.DOMAIN_PROD_RU) {
            return DataConfig.VK_AUTHORIZATION_LINK_PROD_RU;
        }
        else if(SetupConfig.DOMAIN == SetupConfig.DOMAIN_PROD_ORG){
            return DataConfig.VK_AUTHORIZATION_LINK_PROD_ORG;
        }
        else if(SetupConfig.DOMAIN == SetupConfig.DOMAIN_DEV_LOCALHOST) {
            return DataConfig.VK_AUTHORIZATION_LINK_LOCALHOST;
        }
        else{
            return DataConfig.VK_AUTHORIZATION_LINK_PI;
        }
    }
    public static setupGoogleID(){
        if(SetupConfig.DOMAIN == SetupConfig.DOMAIN_PROD_RU) {
            return DataConfig.GOOGLE_AN_ID_RU;
        }
        else{
            return DataConfig.GOOGLE_AN_ID_ORG;
        }
        }
    public static setupGoogleMode(){
        if(SetupConfig.DOMAIN == SetupConfig.DOMAIN_DEV_LOCALHOST) {
            return DataConfig.GOOGLE_AN_MODE_DEV;
        } else {
            return DataConfig.GOOGLE_AN_MODE_PROD;
        }
    }

}