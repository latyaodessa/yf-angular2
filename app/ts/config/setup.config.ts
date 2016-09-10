export class SetupConfig {

    //Routing
    public static SINGLE_POST_ROUTE ="post";
    public static NATIVE_LIST_ROUTE = "native";
    public static SETS_LIST_ROUTE = "sets";
    public static SILHOUETTES_LIST_ROUTE = "silhouettes";
    public static LOGIN_ROUTE = "login";

    //Elastic prod
    //public static ELASTIC_HOST = 'http://95.183.12.178:9200/';
    //Elastic dev
    public static ELASTIC_HOST = 'http://localhost:9200/';
    //Elastic Raspberry Pi
    //public static ELASTIC_HOST = 'http://raspberrypi.local:9200/';

    //YF Services
    // HOST dev
    public static YF_HOST = "http://localhost:8080";
    // HOST Raspberry Pi
    //public static YF_HOST = "http://raspberrypi.local:8080";
    // HOST prod
    //public static YF_HOST = "http://95.183.12.178:8080";

    public static YF_MODULE = "yf-services";
    public static REST_BASIS = "rest";
    public static REST_PATH_USER = "user";
    public static REST_METHOD_GET = "get";
    public static REST_PATH_VK = "vk";
    public static REST_METHOD_CREATE = "create";



    //vk authorization
    //dev
    public static VK_AUTHORIZATION_LINK = "https://oauth.vk.com/authorize?client_id=4601875&display=page&redirect_uri=http://localhost:3000/auth/vk/&scope=friends&response_type=token&v=5.53";
    //Raspberry Pi
    //public static VK_AUTHORIZATION_LINK = "https://oauth.vk.com/authorize?client_id=4601875&display=page&redirect_uri=http://raspberrypi.local:3000/auth/vk/&scope=friends&response_type=token&v=5.53";
    //prod
    //public static VK_AUTHORIZATION_LINK = "https://oauth.vk.com/authorize?client_id=4601875&display=page&redirect_uri=http://youngfolks.ru/auth/vk/&scope=friends&response_type=token&v=5.53";


    //localStorage keys
    public static TOKEN_KEY_NAME = "token";
    public static EXPIRES_IN_NAME = "expires_in";
    public static USER_ID_NAME = "user_id";
    public static USER_TYPE_NAME = "user_type";

    public static FIRST_NAME_KEY_NAME = "first_name";
    public static LAST_NAME_KEY_NAME = "last_name";
    public static PHOTO_50_KEY_NAME = "photo_50";



    //Response statuses
    public static RES_NO_CONTENT_204 = 204;
}