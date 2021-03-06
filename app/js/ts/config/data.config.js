"use strict";
var DataConfig = (function () {
    function DataConfig() {
    }
    DataConfig.TRANSLIT_OFF = false;
    DataConfig.TRANSLIT_ON = true;
    DataConfig.ELASTIC_HOST_PROD = 'http://95.183.12.178:9200/';
    DataConfig.ELASTIC_HOST_LOCALHOST = 'http://localhost:9200/';
    DataConfig.ELASTIC_HOST_PI = 'http://raspberrypi.local:9200/';
    DataConfig.YF_HOST_PROD = "http://95.183.12.178:8080";
    DataConfig.YF_HOST_LOCALHOST = "http://localhost:8080";
    DataConfig.YF_HOST_PI = "http://raspberrypi.local:8080";
    DataConfig.VK_AUTHORIZATION_LINK_PROD_RU = "https://oauth.vk.com/authorize?client_id=4601875&display=page&redirect_uri=http://youngfolks.ru/auth/vk/&scope=friends&response_type=token&v=5.53";
    DataConfig.VK_AUTHORIZATION_LINK_PROD_ORG = "https://oauth.vk.com/authorize?client_id=4601875&display=page&redirect_uri=http://youngfolks.org/auth/vk/&scope=friends&response_type=token&v=5.53";
    DataConfig.VK_AUTHORIZATION_LINK_LOCALHOST = "https://oauth.vk.com/authorize?client_id=4601875&display=page&redirect_uri=http://localhost:3000/auth/vk/&scope=friends&response_type=token&v=5.53";
    DataConfig.VK_AUTHORIZATION_LINK_PI = "https://oauth.vk.com/authorize?client_id=4601875&display=page&redirect_uri=http://raspberrypi.local:3000/auth/vk/&scope=friends&response_type=token&v=5.53";
    //Google Analytics
    DataConfig.GOOGLE_AN_ID_RU = "UA-57052631-1";
    DataConfig.GOOGLE_AN_ID_ORG = "UA-85065618-1";
    DataConfig.GOOGLE_AN_MODE_DEV = "none";
    DataConfig.GOOGLE_AN_MODE_PROD = "auto";
    return DataConfig;
}());
exports.DataConfig = DataConfig;
//# sourceMappingURL=data.config.js.map