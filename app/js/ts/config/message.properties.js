"use strict";
var setup_config_1 = require('./setup.config');
var content_properties_1 = require('./content.properties');
var MessageConfig = (function () {
    function MessageConfig() {
    }
    MessageConfig.getMAIN_TITLE = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.MAIN_TITLE_ENG : content_properties_1.ContentProperties.MAIN_TITLE_RU;
    };
    MessageConfig.getNATIVE_LIST_TITLE = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.NATIVE_LIST_TITLE_ENG : content_properties_1.ContentProperties.NATIVE_LIST_TITLE_RU;
    };
    MessageConfig.getART_LIST_TITLE = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.ART_LIST_TITLE_ENG : content_properties_1.ContentProperties.ART_LIST_TITLE_RU;
    };
    MessageConfig.getSETS_LIST_TITLE = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.SETS_LIST_TITLE_ENG : content_properties_1.ContentProperties.SETS_LIST_TITLE_RU;
    };
    MessageConfig.getSILHOUETTES_LIST_TITLE = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.SILHOUETTES_LIST_TITLE_ENG : content_properties_1.ContentProperties.SILHOUETTES_LIST_TITLE_RU;
    };
    MessageConfig.getMD_DETAILS_TITLE = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.MD_DETAILS_TITLE_ENG : content_properties_1.ContentProperties.MD_DETAILS_TITLE_RU;
    };
    MessageConfig.getPH_DETAILS_TITLE = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.PH_DETAILS_TITLE_ENG : content_properties_1.ContentProperties.PH_DETAILS_TITLE_RU;
    };
    MessageConfig.getDASHBOARD_TITLE = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.DASHBOARD_TITLE_ENG : content_properties_1.ContentProperties.DASHBOARD_TITLE_RU;
    };
    MessageConfig.getSEARCH_INQUERY = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.SEARCH_INQUERY_ENG : content_properties_1.ContentProperties.SEARCH_INQUERY_RU;
    };
    MessageConfig.getSEARCH = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.SEARCH_ENG : content_properties_1.ContentProperties.SEARCH_RU;
    };
    MessageConfig.getENTER = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.ENTER_ENG : content_properties_1.ContentProperties.ENTER_RU;
    };
    MessageConfig.getEXIT = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.EXIT_ENG : content_properties_1.ContentProperties.EXIT_RU;
    };
    MessageConfig.getVK_BUTTON_TEXT = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.VK_BUTTON_TEXT_ENG : content_properties_1.ContentProperties.VK_BUTTON_TEXT_RU;
    };
    MessageConfig.getFB_BUTTON_TEXT = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.FB_BUTTON_TEXT_ENG : content_properties_1.ContentProperties.FB_BUTTON_TEXT_RU;
    };
    MessageConfig.getMAIN_PAGE = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.MAIN_PAGE_ENG : content_properties_1.ContentProperties.MAIN_PAGE_RU;
    };
    MessageConfig.getNATIVE = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.NATIVE_ENG : content_properties_1.ContentProperties.NATIVE_RU;
    };
    MessageConfig.getSETS = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.SETS_ENG : content_properties_1.ContentProperties.SETS_RU;
    };
    MessageConfig.getSILHOUETTES = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.SILHOUETTES_ENG : content_properties_1.ContentProperties.SILHOUETTES_RU;
    };
    MessageConfig.getART = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.ART_ENG : content_properties_1.ContentProperties.ART_RU;
    };
    MessageConfig.getNOTING_FOUND = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.NOTING_FOUND_ENG : content_properties_1.ContentProperties.NOTING_FOUND_RU;
    };
    MessageConfig.getNEW_NATIVE_TITLE = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.NEW_NATIVE_TITLE_ENG : content_properties_1.ContentProperties.NEW_NATIVE_TITLE_RU;
    };
    MessageConfig.getNEW_SETS_TITLE = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.NEW_SETS_TITLE_ENG : content_properties_1.ContentProperties.NEW_SETS_TITLE_RU;
    };
    MessageConfig.getSUGGESTED_POSTS_TITLE = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.SUGGESTED_POSTS_TITLE_ENG : content_properties_1.ContentProperties.SUGGESTED_POSTS_TITLE_RU;
    };
    MessageConfig.getSAVED_POSTS_TITLE = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.SAVED_POSTS_TITLE_ENG : content_properties_1.ContentProperties.SAVED_POSTS_TITLE_RU;
    };
    MessageConfig.getSAVED_PHOTOS_TITLE = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.SAVED_PHOTOS_TITLE_ENG : content_properties_1.ContentProperties.SAVED_PHOTOS_TITLE_RU;
    };
    MessageConfig.getNO_SAVED_PHOTOS = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.NO_SAVED_PHOTOS_ENG : content_properties_1.ContentProperties.NO_SAVED_PHOTOS_RU;
    };
    MessageConfig.getNO_SAVED_POSTS = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.NO_SAVED_POSTS_ENG : content_properties_1.ContentProperties.NO_SAVED_POSTS_RU;
    };
    MessageConfig.getWEEKLY_TOP_SETS = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.WEEKLY_TOP_SETS_ENG : content_properties_1.ContentProperties.WEEKLY_TOP_SETS_RU;
    };
    MessageConfig.getWEEKLY_TOP_NATIVE = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.WEEKLY_TOP_NATIVE_ENG : content_properties_1.ContentProperties.WEEKLY_TOP_NATIVE_RU;
    };
    MessageConfig.getCLOSE_MODAL = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.CLOSE_MODAL_ENG : content_properties_1.ContentProperties.CLOSE_MODAL_RU;
    };
    MessageConfig.getMODAL_TITLE_PHOTOSET = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.MODAL_TITLE_PHOTOSET_ENG : content_properties_1.ContentProperties.MODAL_TITLE_PHOTOSET_RU;
    };
    MessageConfig.getMODAL_TITLE_SINGLE_PHOTO = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.MODAL_TITLE_SINGLE_PHOTO_ENG : content_properties_1.ContentProperties.MODAL_TITLE_SINGLE_PHOTO_RU;
    };
    MessageConfig.getMODAL_TEXT_NOT_LOGGED_IN = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.MODAL_TEXT_NOT_LOGGED_IN_ENG : content_properties_1.ContentProperties.MODAL_TEXT_NOT_LOGGED_IN_RU;
    };
    MessageConfig.getSHOW_ALL_PICS = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.SHOW_ALL_PICS_ENG : content_properties_1.ContentProperties.SHOW_ALL_PICS_RU;
    };
    MessageConfig.getSHOW_ALL_PICS_FULL = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.SHOW_ALL_PICS_FULL_ENG : content_properties_1.ContentProperties.SHOW_ALL_PICS_FULL_RU;
    };
    MessageConfig.getOPEN_SINGLE_POST = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.OPEN_SINGLE_POST_ENG : content_properties_1.ContentProperties.OPEN_SINGLE_POST_RU;
    };
    MessageConfig.getDETAILS_SAVE_POST_IN_DASHBOARD = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.DETAILS_SAVE_POST_IN_DASHBOARD_ENG : content_properties_1.ContentProperties.DETAILS_SAVE_POST_IN_DASHBOARD_RU;
    };
    MessageConfig.getDETAILS_POST_ALREADY_SAVED = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.DETAILS_POST_ALREADY_SAVED_ENG : content_properties_1.ContentProperties.DETAILS_POST_ALREADY_SAVED_RU;
    };
    MessageConfig.getDETAILS_POST_SUCCESSFULLY_SAVED = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.DETAILS_POST_SUCCESSFULLY_SAVED_ENG : content_properties_1.ContentProperties.DETAILS_POST_SUCCESSFULLY_SAVED_RU;
    };
    MessageConfig.getOPEN_POST_IN_VK = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.OPEN_POST_IN_VK_ENG : content_properties_1.ContentProperties.OPEN_POST_IN_VK_RU;
    };
    MessageConfig.getDESCRIPTION_ADDITON = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.DESCRIPTION_ADDITON_ENG : content_properties_1.ContentProperties.DESCRIPTION_ADDITON_RU;
    };
    MessageConfig.getSHARE_BUTTON_TEXT = function () {
        return setup_config_1.SetupConfig.TRANSLIT ? content_properties_1.ContentProperties.SHARE_BUTTON_TEXT_ENG : content_properties_1.ContentProperties.SHARE_BUTTON_TEXT_RU;
    };
    MessageConfig.MAIN_TITLE = MessageConfig.getMAIN_TITLE();
    MessageConfig.NATIVE_LIST_TITLE = MessageConfig.getNATIVE_LIST_TITLE();
    MessageConfig.ART_LIST_TITLE = MessageConfig.getART_LIST_TITLE();
    MessageConfig.SETS_LIST_TITLE = MessageConfig.getSETS_LIST_TITLE();
    MessageConfig.SILHOUETTES_LIST_TITLE = MessageConfig.getSILHOUETTES_LIST_TITLE();
    MessageConfig.MD_DETAILS_TITLE = MessageConfig.getMD_DETAILS_TITLE();
    MessageConfig.PH_DETAILS_TITLE = MessageConfig.getPH_DETAILS_TITLE();
    MessageConfig.DASHBOARD_TITLE = MessageConfig.getDASHBOARD_TITLE();
    //Navigation
    MessageConfig.SEARCH_INQUERY = MessageConfig.getSEARCH_INQUERY();
    MessageConfig.SEARCH = MessageConfig.getSEARCH();
    MessageConfig.ENTER = MessageConfig.getENTER();
    MessageConfig.EXIT = MessageConfig.getEXIT();
    MessageConfig.VK_BUTTON_TEXT = MessageConfig.getVK_BUTTON_TEXT();
    MessageConfig.FB_BUTTON_TEXT = MessageConfig.getFB_BUTTON_TEXT();
    //Pages
    MessageConfig.MAIN_PAGE = MessageConfig.getMAIN_PAGE();
    MessageConfig.NATIVE = MessageConfig.getNATIVE();
    MessageConfig.SETS = MessageConfig.getSETS();
    MessageConfig.SILHOUETTES = MessageConfig.getSILHOUETTES();
    MessageConfig.ART = MessageConfig.getART();
    //Fotter
    MessageConfig.YF_SLOGAN = content_properties_1.ContentProperties.YF_SLOGAN;
    //Titles
    MessageConfig.NOTING_FOUND = MessageConfig.getNOTING_FOUND();
    //Content
    MessageConfig.NEW_NATIVE_TITLE = MessageConfig.getNEW_NATIVE_TITLE();
    MessageConfig.NEW_SETS_TITLE = MessageConfig.getNEW_SETS_TITLE();
    MessageConfig.SUGGESTED_POSTS_TITLE = MessageConfig.getSUGGESTED_POSTS_TITLE();
    MessageConfig.SAVED_POSTS_TITLE = MessageConfig.getSAVED_POSTS_TITLE();
    MessageConfig.SAVED_PHOTOS_TITLE = MessageConfig.getSAVED_PHOTOS_TITLE();
    MessageConfig.NO_SAVED_PHOTOS = MessageConfig.getNO_SAVED_PHOTOS();
    MessageConfig.NO_SAVED_POSTS = MessageConfig.getNO_SAVED_POSTS();
    MessageConfig.WEEKLY_TOP_SETS = MessageConfig.getWEEKLY_TOP_SETS();
    MessageConfig.WEEKLY_TOP_NATIVE = MessageConfig.getWEEKLY_TOP_NATIVE();
    //Modal
    MessageConfig.CLOSE_MODAL = MessageConfig.getCLOSE_MODAL();
    MessageConfig.MODAL_TITLE_PHOTOSET = MessageConfig.getMODAL_TITLE_PHOTOSET();
    MessageConfig.MODAL_TITLE_SINGLE_PHOTO = MessageConfig.getMODAL_TITLE_SINGLE_PHOTO();
    MessageConfig.MODAL_TEXT_NOT_LOGGED_IN = MessageConfig.getMODAL_TEXT_NOT_LOGGED_IN();
    //Overlay post
    MessageConfig.SHOW_ALL_PICS = MessageConfig.getSHOW_ALL_PICS();
    MessageConfig.SHOW_ALL_PICS_FULL = MessageConfig.getSHOW_ALL_PICS_FULL();
    MessageConfig.OPEN_SINGLE_POST = MessageConfig.getOPEN_SINGLE_POST();
    //Page Dtagails
    MessageConfig.DETAILS_SAVE_POST_IN_DASHBOARD = MessageConfig.getDETAILS_SAVE_POST_IN_DASHBOARD();
    MessageConfig.DETAILS_POST_ALREADY_SAVED = MessageConfig.getDETAILS_POST_ALREADY_SAVED();
    MessageConfig.DETAILS_POST_SUCCESSFULLY_SAVED = MessageConfig.getDETAILS_POST_SUCCESSFULLY_SAVED();
    MessageConfig.OPEN_POST_IN_VK = MessageConfig.getOPEN_POST_IN_VK();
    //Social
    MessageConfig.DESCRIPTION_ADDITON = MessageConfig.getDESCRIPTION_ADDITON();
    MessageConfig.SHARE_BUTTON_TEXT = MessageConfig.getSHARE_BUTTON_TEXT();
    return MessageConfig;
}());
exports.MessageConfig = MessageConfig;
//# sourceMappingURL=message.properties.js.map