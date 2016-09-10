"use strict";
var SetupConfig = (function () {
    function SetupConfig() {
    }
    //Routing
    SetupConfig.SINGLE_POST_ROUTE = "post";
    SetupConfig.NATIVE_LIST_ROUTE = "native";
    SetupConfig.SETS_LIST_ROUTE = "sets";
    SetupConfig.SILHOUETTES_LIST_ROUTE = "silhouettes";
    //Elastic prod
    SetupConfig.ELASTIC_HOST = 'http://95.183.12.178:9200/';
    //Elastic dev
    //public static ELASTIC_HOST = 'http://raspberrypi.local:9200/';
    //vk
    SetupConfig.VK_BASIS_HOST = "https://api.vk.com/method/";
    SetupConfig.VK_METHOD_GET_IDS = "users.get?";
    SetupConfig.VK_USER_IDS = "user_ids=";
    SetupConfig.VK_USER_FIELDS = "&fields=bdate,city,country,photo_50,photo_100,photo_200,photo_max,online,home_phone,site,crop_photo";
    SetupConfig.VK_NAME_CASE_NOM = "&name_case=Nom";
    SetupConfig.VK_API_VERSION_5_53 = "&v=5.53";
    return SetupConfig;
}());
exports.SetupConfig = SetupConfig;
//# sourceMappingURL=setup.config.js.map