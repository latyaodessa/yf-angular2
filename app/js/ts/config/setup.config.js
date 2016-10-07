"use strict";
var data_config_1 = require('./data.config');
var SetupConfig = (function () {
    function SetupConfig() {
    }
    SetupConfig.setupElastic = function () {
        console.log(window.location.hostname);
        if (SetupConfig.DOMAIN == SetupConfig.DOMAIN_PROD_RU || SetupConfig.DOMAIN == SetupConfig.DOMAIN_PROD_ORG) {
            return data_config_1.DataConfig.ELASTIC_HOST_PROD;
        }
        else if (SetupConfig.DOMAIN == SetupConfig.DOMAIN_DEV_LOCALHOST) {
            return data_config_1.DataConfig.ELASTIC_HOST_LOCALHOST;
        }
        else {
            return data_config_1.DataConfig.ELASTIC_HOST_PI;
        }
    };
    SetupConfig.setupTranslit = function () {
        if (SetupConfig.DOMAIN == SetupConfig.DOMAIN_PROD_ORG) {
            return true;
        }
        else {
            return false;
        }
    };
    SetupConfig.setupYFHost = function () {
        if (SetupConfig.DOMAIN == SetupConfig.DOMAIN_PROD_RU || SetupConfig.DOMAIN == SetupConfig.DOMAIN_PROD_ORG) {
            return data_config_1.DataConfig.YF_HOST_PROD;
        }
        else if (SetupConfig.DOMAIN == SetupConfig.DOMAIN_DEV_LOCALHOST) {
            return data_config_1.DataConfig.YF_HOST_LOCALHOST;
        }
        else {
            return data_config_1.DataConfig.YF_HOST_PI;
        }
    };
    SetupConfig.setupVKAutLink = function () {
        if (SetupConfig.DOMAIN == SetupConfig.DOMAIN_PROD_RU) {
            return data_config_1.DataConfig.VK_AUTHORIZATION_LINK_PROD_RU;
        }
        else if (SetupConfig.DOMAIN == SetupConfig.DOMAIN_PROD_ORG) {
            return data_config_1.DataConfig.VK_AUTHORIZATION_LINK_PROD_ORG;
        }
        else if (SetupConfig.DOMAIN == SetupConfig.DOMAIN_DEV_LOCALHOST) {
            return data_config_1.DataConfig.VK_AUTHORIZATION_LINK_LOCALHOST;
        }
        else {
            return data_config_1.DataConfig.VK_AUTHORIZATION_LINK_PI;
        }
    };
    SetupConfig.setupGoogleID = function () {
        if (SetupConfig.DOMAIN == SetupConfig.DOMAIN_PROD_RU) {
            return data_config_1.DataConfig.GOOGLE_AN_ID_RU;
        }
        else {
            return data_config_1.DataConfig.GOOGLE_AN_ID_ORG;
        }
    };
    SetupConfig.setupGoogleMode = function () {
        if (SetupConfig.DOMAIN == SetupConfig.DOMAIN_DEV_LOCALHOST) {
            return data_config_1.DataConfig.GOOGLE_AN_MODE_DEV;
        }
        else {
            return data_config_1.DataConfig.GOOGLE_AN_MODE_PROD;
        }
    };
    SetupConfig.DOMAIN = window.location.hostname;
    //Routing
    SetupConfig.SINGLE_POST_ROUTE = "post";
    SetupConfig.NATIVE_LIST_ROUTE = "native";
    SetupConfig.ART_LIST_ROUTE = "art";
    SetupConfig.SETS_LIST_ROUTE = "sets";
    SetupConfig.SILHOUETTES_LIST_ROUTE = "silhouettes";
    SetupConfig.LOGIN_ROUTE = "login";
    SetupConfig.DASHBOARD_ROUTE = "dashboard";
    SetupConfig.SEARCH_ROUTE = "search";
    SetupConfig.ART_ROUTE = "art";
    //Domains
    SetupConfig.DOMAIN_PROD_RU = "youngfolks.ru";
    SetupConfig.DOMAIN_PROD_ORG = "youngfolks.org";
    SetupConfig.DOMAIN_DEV_LOCALHOST = "localhost";
    //TO SETUP
    SetupConfig.TRANSLIT = SetupConfig.setupTranslit();
    SetupConfig.ELASTIC_HOST = SetupConfig.setupElastic();
    SetupConfig.YF_HOST = SetupConfig.setupYFHost();
    SetupConfig.VK_AUTHORIZATION_LINK = SetupConfig.setupVKAutLink();
    SetupConfig.GOOGLE_AN_ID = SetupConfig.setupGoogleID();
    SetupConfig.GOOGLE_AN_MODE = SetupConfig.setupGoogleMode();
    SetupConfig.YF_MODULE = "yf-services";
    SetupConfig.REST_BASIS = "rest";
    SetupConfig.REST_PATH_USER = "user";
    SetupConfig.REST_METHOD_GET = "get";
    SetupConfig.REST_PATH_VK = "vk";
    SetupConfig.REST_PATH_FB = "fb";
    SetupConfig.REST_METHOD_CREATE = "create";
    SetupConfig.REST_METHOD_SAVE = "save";
    SetupConfig.REST_METHOD_DELETE = "delete";
    SetupConfig.REST_DASHBOARD_POST = "post";
    SetupConfig.REST_DASHBOARD_PHOTO = "photo";
    SetupConfig.REST_DASHBOARD_QUERY_PARAMETER_USER_ID = "user_id";
    SetupConfig.REST_DASHBOARD_QUERY_PARAMETER_POST_ID = "post_id";
    SetupConfig.REST_DASHBOARD_QUERY_PARAMETER_PHOTO_ID = "photo_id";
    //localStorage keys
    SetupConfig.TOKEN_KEY_NAME = "token";
    SetupConfig.EXPIRES_IN_NAME = "expires_in";
    SetupConfig.USER_ID_NAME = "user_id";
    SetupConfig.USER_TYPE_NAME = "user_type";
    SetupConfig.FIRST_NAME_KEY_NAME = "first_name";
    SetupConfig.LAST_NAME_KEY_NAME = "last_name";
    SetupConfig.THUMBNAIL = "photo_50";
    //Response statuses
    SetupConfig.RES_NO_CONTENT_204 = 204;
    return SetupConfig;
}());
exports.SetupConfig = SetupConfig;
//# sourceMappingURL=setup.config.js.map