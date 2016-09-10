"use strict";
var SetupConfig = (function () {
    function SetupConfig() {
    }
    //Routing
    SetupConfig.SINGLE_POST_ROUTE = "post";
    SetupConfig.NATIVE_LIST_ROUTE = "native";
    SetupConfig.SETS_LIST_ROUTE = "sets";
    SetupConfig.SILHOUETTES_LIST_ROUTE = "silhouettes";
    SetupConfig.LOGIN_ROUTE = "login";
    //Elastic prod
    //public static ELASTIC_HOST = 'http://95.183.12.178:9200/';
    //Elastic dev
    SetupConfig.ELASTIC_HOST = 'http://localhost:9200/';
    //Elastic Raspberry Pi
    //public static ELASTIC_HOST = 'http://raspberrypi.local:9200/';
    //YF Services
    // HOST dev
    SetupConfig.YF_HOST = "http://localhost:8080";
    // HOST Raspberry Pi
    //public static YF_HOST = "http://raspberrypi.local:8080";
    // HOST prod
    //public static YF_HOST = "http://95.183.12.178:8080";
    SetupConfig.YF_MODULE = "yf-services";
    SetupConfig.REST_BASIS = "rest";
    SetupConfig.REST_PATH_USER = "user";
    SetupConfig.REST_METHOD_GET = "get";
    SetupConfig.REST_PATH_VK = "vk";
    SetupConfig.REST_METHOD_CREATE = "create";
    //vk authorization
    //dev
    SetupConfig.VK_AUTHORIZATION_LINK = "https://oauth.vk.com/authorize?client_id=4601875&display=page&redirect_uri=http://localhost:3000/auth/vk/&scope=friends&response_type=token&v=5.53";
    //Raspberry Pi
    //public static VK_AUTHORIZATION_LINK = "https://oauth.vk.com/authorize?client_id=4601875&display=page&redirect_uri=http://raspberrypi.local:3000/auth/vk/&scope=friends&response_type=token&v=5.53";
    //prod
    //public static VK_AUTHORIZATION_LINK = "https://oauth.vk.com/authorize?client_id=4601875&display=page&redirect_uri=http://youngfolks.ru/auth/vk/&scope=friends&response_type=token&v=5.53";
    //localStorage keys
    SetupConfig.TOKEN_KEY_NAME = "token";
    SetupConfig.EXPIRES_IN_NAME = "expires_in";
    SetupConfig.USER_ID_NAME = "user_id";
    SetupConfig.USER_TYPE_NAME = "user_type";
    SetupConfig.FIRST_NAME_KEY_NAME = "first_name";
    SetupConfig.LAST_NAME_KEY_NAME = "last_name";
    SetupConfig.PHOTO_50_KEY_NAME = "photo_50";
    //Response statuses
    SetupConfig.RES_NO_CONTENT_204 = 204;
    return SetupConfig;
}());
exports.SetupConfig = SetupConfig;
//# sourceMappingURL=setup.config.js.map