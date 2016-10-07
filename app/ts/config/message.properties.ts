import {SetupConfig} from './setup.config'
import {ContentProperties} from './content.properties'

export class MessageConfig {
    public static MAIN_TITLE = MessageConfig.getMAIN_TITLE();
    public static NATIVE_LIST_TITLE = MessageConfig.getNATIVE_LIST_TITLE();
    public static ART_LIST_TITLE = MessageConfig.getART_LIST_TITLE();
    public static SETS_LIST_TITLE = MessageConfig.getSETS_LIST_TITLE();
    public static SILHOUETTES_LIST_TITLE = MessageConfig.getSILHOUETTES_LIST_TITLE();
    public static MD_DETAILS_TITLE = MessageConfig.getMD_DETAILS_TITLE();
    public static PH_DETAILS_TITLE = MessageConfig.getPH_DETAILS_TITLE();
    public static DASHBOARD_TITLE = MessageConfig.getDASHBOARD_TITLE();

    //Navigation
    public static SEARCH_INQUERY = MessageConfig.getSEARCH_INQUERY();
    public static SEARCH = MessageConfig.getSEARCH();
    public static ENTER = MessageConfig.getENTER();
    public static EXIT = MessageConfig.getEXIT();

    public static VK_BUTTON_TEXT:string = MessageConfig.getVK_BUTTON_TEXT();
    public static FB_BUTTON_TEXT = MessageConfig.getFB_BUTTON_TEXT();

    //Pages
    public static MAIN_PAGE = MessageConfig.getMAIN_PAGE();
    public static NATIVE = MessageConfig.getNATIVE();
    public static SETS = MessageConfig.getSETS();
    public static SILHOUETTES = MessageConfig.getSILHOUETTES();
    public static ART = MessageConfig.getART();


    //Fotter
    public static YF_SLOGAN = ContentProperties.YF_SLOGAN;

    //Titles
    public static NOTING_FOUND = MessageConfig.getNOTING_FOUND();


    //Content
    public static NEW_NATIVE_TITLE = MessageConfig.getNEW_NATIVE_TITLE();
    public static NEW_SETS_TITLE = MessageConfig.getNEW_SETS_TITLE();
    public static SUGGESTED_POSTS_TITLE = MessageConfig.getSUGGESTED_POSTS_TITLE();
    public static SAVED_POSTS_TITLE = MessageConfig.getSAVED_POSTS_TITLE();
    public static SAVED_PHOTOS_TITLE = MessageConfig.getSAVED_PHOTOS_TITLE();
    public static NO_SAVED_PHOTOS = MessageConfig.getNO_SAVED_PHOTOS();
    public static NO_SAVED_POSTS = MessageConfig.getNO_SAVED_POSTS();

    public static WEEKLY_TOP_SETS = MessageConfig.getWEEKLY_TOP_SETS();
    public static WEEKLY_TOP_NATIVE = MessageConfig.getWEEKLY_TOP_NATIVE();

    //Modal
    public static CLOSE_MODAL = MessageConfig.getCLOSE_MODAL();
    public static MODAL_TITLE_PHOTOSET = MessageConfig.getMODAL_TITLE_PHOTOSET();
    public static MODAL_TITLE_SINGLE_PHOTO = MessageConfig.getMODAL_TITLE_SINGLE_PHOTO();
    public static MODAL_TEXT_NOT_LOGGED_IN = MessageConfig.getMODAL_TEXT_NOT_LOGGED_IN();

    //Overlay post
    public static SHOW_ALL_PICS = MessageConfig.getSHOW_ALL_PICS();
    public static SHOW_ALL_PICS_FULL = MessageConfig.getSHOW_ALL_PICS_FULL();
    public static OPEN_SINGLE_POST = MessageConfig.getOPEN_SINGLE_POST();

    //Page Dtagails
    public static DETAILS_SAVE_POST_IN_DASHBOARD = MessageConfig.getDETAILS_SAVE_POST_IN_DASHBOARD();
    public static DETAILS_POST_ALREADY_SAVED = MessageConfig.getDETAILS_POST_ALREADY_SAVED();
    public static DETAILS_POST_SUCCESSFULLY_SAVED = MessageConfig.getDETAILS_POST_SUCCESSFULLY_SAVED();
    public static OPEN_POST_IN_VK = MessageConfig.getOPEN_POST_IN_VK();

    //Social
    public static DESCRIPTION_ADDITON = MessageConfig.getDESCRIPTION_ADDITON();
    public static SHARE_BUTTON_TEXT = MessageConfig.getSHARE_BUTTON_TEXT();

    public static getMAIN_TITLE(){
        return  SetupConfig.TRANSLIT ? ContentProperties.MAIN_TITLE_ENG : ContentProperties.MAIN_TITLE_RU;
    }
    public static getNATIVE_LIST_TITLE(){
        return  SetupConfig.TRANSLIT ? ContentProperties.NATIVE_LIST_TITLE_ENG : ContentProperties.NATIVE_LIST_TITLE_RU;
    }
    public static getART_LIST_TITLE(){
        return  SetupConfig.TRANSLIT ? ContentProperties.ART_LIST_TITLE_ENG : ContentProperties.ART_LIST_TITLE_RU;
    }
    public static getSETS_LIST_TITLE(){
        return  SetupConfig.TRANSLIT ? ContentProperties.SETS_LIST_TITLE_ENG : ContentProperties.SETS_LIST_TITLE_RU;
    }
    public static getSILHOUETTES_LIST_TITLE(){
        return  SetupConfig.TRANSLIT ? ContentProperties.SILHOUETTES_LIST_TITLE_ENG : ContentProperties.SILHOUETTES_LIST_TITLE_RU;
    }
    public static getMD_DETAILS_TITLE(){
        return  SetupConfig.TRANSLIT ? ContentProperties.MD_DETAILS_TITLE_ENG : ContentProperties.MD_DETAILS_TITLE_RU;
    }
    public static getPH_DETAILS_TITLE(){
        return  SetupConfig.TRANSLIT ? ContentProperties.PH_DETAILS_TITLE_ENG : ContentProperties.PH_DETAILS_TITLE_RU;
    }
    public static getDASHBOARD_TITLE(){
        return  SetupConfig.TRANSLIT ? ContentProperties.DASHBOARD_TITLE_ENG : ContentProperties.DASHBOARD_TITLE_RU;
    }
    public static getSEARCH_INQUERY(){
        return  SetupConfig.TRANSLIT ? ContentProperties.SEARCH_INQUERY_ENG : ContentProperties.SEARCH_INQUERY_RU;
    }
    public static getSEARCH(){
        return  SetupConfig.TRANSLIT ? ContentProperties.SEARCH_ENG : ContentProperties.SEARCH_RU;
    }
    public static getENTER(){
        return  SetupConfig.TRANSLIT ? ContentProperties.ENTER_ENG : ContentProperties.ENTER_RU;
    }
    public static getEXIT(){
        return  SetupConfig.TRANSLIT ? ContentProperties.EXIT_ENG : ContentProperties.EXIT_RU;
    }
    public static getVK_BUTTON_TEXT(){
        return  SetupConfig.TRANSLIT ? ContentProperties.VK_BUTTON_TEXT_ENG : ContentProperties.VK_BUTTON_TEXT_RU;
    }
    public static getFB_BUTTON_TEXT(){
        return  SetupConfig.TRANSLIT ? ContentProperties.FB_BUTTON_TEXT_ENG : ContentProperties.FB_BUTTON_TEXT_RU;
    }
    public static getMAIN_PAGE(){
        return  SetupConfig.TRANSLIT ? ContentProperties.MAIN_PAGE_ENG : ContentProperties.MAIN_PAGE_RU;
    }
    public static getNATIVE(){
        return  SetupConfig.TRANSLIT ? ContentProperties.NATIVE_ENG : ContentProperties.NATIVE_RU;
    }
    public static getSETS(){
        return  SetupConfig.TRANSLIT ? ContentProperties.SETS_ENG : ContentProperties.SETS_RU;
    }
    public static getSILHOUETTES(){
        return  SetupConfig.TRANSLIT ? ContentProperties.SILHOUETTES_ENG : ContentProperties.SILHOUETTES_RU;
    }
    public static getART(){
        return  SetupConfig.TRANSLIT ? ContentProperties.ART_ENG : ContentProperties.ART_RU;
    }
    public static getNOTING_FOUND(){
        return  SetupConfig.TRANSLIT ? ContentProperties.NOTING_FOUND_ENG : ContentProperties.NOTING_FOUND_RU;
    }
    public static getNEW_NATIVE_TITLE(){
        return  SetupConfig.TRANSLIT ? ContentProperties.NEW_NATIVE_TITLE_ENG : ContentProperties.NEW_NATIVE_TITLE_RU;
    }
    public static getNEW_SETS_TITLE(){
        return  SetupConfig.TRANSLIT ? ContentProperties.NEW_SETS_TITLE_ENG : ContentProperties.NEW_SETS_TITLE_RU;
    }
    public static getSUGGESTED_POSTS_TITLE(){
        return  SetupConfig.TRANSLIT ? ContentProperties.SUGGESTED_POSTS_TITLE_ENG : ContentProperties.SUGGESTED_POSTS_TITLE_RU;
    }
    public static getSAVED_POSTS_TITLE(){
        return  SetupConfig.TRANSLIT ? ContentProperties.SAVED_POSTS_TITLE_ENG : ContentProperties.SAVED_POSTS_TITLE_RU;
    }
    public static getSAVED_PHOTOS_TITLE(){
        return  SetupConfig.TRANSLIT ? ContentProperties.SAVED_PHOTOS_TITLE_ENG : ContentProperties.SAVED_PHOTOS_TITLE_RU;
    }
    public static getNO_SAVED_PHOTOS(){
        return  SetupConfig.TRANSLIT ? ContentProperties.NO_SAVED_PHOTOS_ENG : ContentProperties.NO_SAVED_PHOTOS_RU;
    }
    public static getNO_SAVED_POSTS(){
        return  SetupConfig.TRANSLIT ? ContentProperties.NO_SAVED_POSTS_ENG : ContentProperties.NO_SAVED_POSTS_RU;
    }
    public static getWEEKLY_TOP_SETS(){
        return  SetupConfig.TRANSLIT ? ContentProperties.WEEKLY_TOP_SETS_ENG : ContentProperties.WEEKLY_TOP_SETS_RU;
    }
    public static getWEEKLY_TOP_NATIVE(){
        return  SetupConfig.TRANSLIT ? ContentProperties.WEEKLY_TOP_NATIVE_ENG : ContentProperties.WEEKLY_TOP_NATIVE_RU;
    }
    public static getCLOSE_MODAL(){
        return  SetupConfig.TRANSLIT ? ContentProperties.CLOSE_MODAL_ENG : ContentProperties.CLOSE_MODAL_RU;
    }
    public static getMODAL_TITLE_PHOTOSET(){
        return  SetupConfig.TRANSLIT ? ContentProperties.MODAL_TITLE_PHOTOSET_ENG : ContentProperties.MODAL_TITLE_PHOTOSET_RU;
    }
    public static getMODAL_TITLE_SINGLE_PHOTO(){
        return  SetupConfig.TRANSLIT ? ContentProperties.MODAL_TITLE_SINGLE_PHOTO_ENG : ContentProperties.MODAL_TITLE_SINGLE_PHOTO_RU;
    }
    public static getMODAL_TEXT_NOT_LOGGED_IN(){
        return  SetupConfig.TRANSLIT ? ContentProperties.MODAL_TEXT_NOT_LOGGED_IN_ENG : ContentProperties.MODAL_TEXT_NOT_LOGGED_IN_RU;
    }
    public static getSHOW_ALL_PICS(){
        return  SetupConfig.TRANSLIT ? ContentProperties.SHOW_ALL_PICS_ENG : ContentProperties.SHOW_ALL_PICS_RU;
    }
    public static getSHOW_ALL_PICS_FULL(){
        return  SetupConfig.TRANSLIT ? ContentProperties.SHOW_ALL_PICS_FULL_ENG : ContentProperties.SHOW_ALL_PICS_FULL_RU;
    }
    public static getOPEN_SINGLE_POST(){
        return  SetupConfig.TRANSLIT ? ContentProperties.OPEN_SINGLE_POST_ENG : ContentProperties.OPEN_SINGLE_POST_RU;
    }
    public static getDETAILS_SAVE_POST_IN_DASHBOARD(){
        return  SetupConfig.TRANSLIT ? ContentProperties.DETAILS_SAVE_POST_IN_DASHBOARD_ENG : ContentProperties.DETAILS_SAVE_POST_IN_DASHBOARD_RU;
    }
    public static getDETAILS_POST_ALREADY_SAVED(){
        return  SetupConfig.TRANSLIT ? ContentProperties.DETAILS_POST_ALREADY_SAVED_ENG : ContentProperties.DETAILS_POST_ALREADY_SAVED_RU;
    }
    public static getDETAILS_POST_SUCCESSFULLY_SAVED(){
        return  SetupConfig.TRANSLIT ? ContentProperties.DETAILS_POST_SUCCESSFULLY_SAVED_ENG : ContentProperties.DETAILS_POST_SUCCESSFULLY_SAVED_RU;
    }
    public static getOPEN_POST_IN_VK(){
        return  SetupConfig.TRANSLIT ? ContentProperties.OPEN_POST_IN_VK_ENG : ContentProperties.OPEN_POST_IN_VK_RU;
    }
    public static getDESCRIPTION_ADDITON(){
        return  SetupConfig.TRANSLIT ? ContentProperties.DESCRIPTION_ADDITON_ENG : ContentProperties.DESCRIPTION_ADDITON_RU;
    }
    public static getSHARE_BUTTON_TEXT(){
        return  SetupConfig.TRANSLIT ? ContentProperties.SHARE_BUTTON_TEXT_ENG : ContentProperties.SHARE_BUTTON_TEXT_RU;
    }
}

