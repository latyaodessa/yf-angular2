"use strict";
var ContentProperties = (function () {
    function ContentProperties() {
    }
    //Users Types
    ContentProperties.VK_USER = 'vk';
    ContentProperties.FB_USER = 'fb';
    ContentProperties.NATIVE_USER = 'native';
    ContentProperties.FB_REQUESTED_FIELDS = ['id', 'first_name', 'last_name', 'gender', 'birthday',
        'email', 'hometown', 'languages', 'locale', 'location',
        'website', 'picture.height(200).width(200)'];
    //Fotter
    ContentProperties.YF_SLOGAN = "Folks, be social";
    //
    //
    //RUS
    //
    //
    ContentProperties.MAIN_TITLE_RU = "Young Folks - Модели и фотографы со всего мира";
    ContentProperties.NATIVE_LIST_TITLE_RU = "Young Folks - Модели и фотографы с России и других стран СНГ";
    ContentProperties.ART_LIST_TITLE_RU = "Young Folks - Искусство, картины";
    ContentProperties.SETS_LIST_TITLE_RU = "Young Folks - Зарубежные модели и фотографы";
    ContentProperties.SILHOUETTES_LIST_TITLE_RU = "Young Folks - Силуэты моделей";
    ContentProperties.MD_DETAILS_TITLE_RU = "Модель:";
    ContentProperties.PH_DETAILS_TITLE_RU = "Фотограф:";
    ContentProperties.DASHBOARD_TITLE_RU = "Профиль";
    //Navigation
    ContentProperties.SEARCH_INQUERY_RU = "Модель/Фотограф";
    ContentProperties.SEARCH_RU = "Поиск";
    ContentProperties.ENTER_RU = "Войти";
    ContentProperties.EXIT_RU = "Выйти";
    ContentProperties.VK_BUTTON_TEXT_RU = "Войти через VK";
    ContentProperties.FB_BUTTON_TEXT_RU = "Войти через Facebook";
    //Pages
    ContentProperties.MAIN_PAGE_RU = "Главная";
    ContentProperties.NATIVE_RU = "Наши";
    ContentProperties.SETS_RU = "Зарубежные";
    ContentProperties.SILHOUETTES_RU = "Силуэты";
    ContentProperties.ART_RU = "Art";
    //Titles
    ContentProperties.NOTING_FOUND_RU = "Ничего не найдено по запросу";
    //Content
    ContentProperties.NEW_NATIVE_TITLE_RU = "Новые фотографии наших моделей";
    ContentProperties.NEW_SETS_TITLE_RU = "Новые фотографии зарубежных моделей";
    ContentProperties.SUGGESTED_POSTS_TITLE_RU = "Похожие работы";
    ContentProperties.SAVED_POSTS_TITLE_RU = "Сохраненные фотосеты";
    ContentProperties.SAVED_PHOTOS_TITLE_RU = "Сохраненные фотографии";
    ContentProperties.NO_SAVED_PHOTOS_RU = "Нет ни одной сохраненной фотографии";
    ContentProperties.NO_SAVED_POSTS_RU = "Нет ни одного сохраненного фотосета";
    ContentProperties.WEEKLY_TOP_SETS_RU = "Топ недели зарубежных моделей";
    ContentProperties.WEEKLY_TOP_NATIVE_RU = "Топ недели наших моделей";
    //Modal
    ContentProperties.CLOSE_MODAL_RU = "закрыть";
    ContentProperties.MODAL_TITLE_PHOTOSET_RU = "Сохранить фотосет в профайл";
    ContentProperties.MODAL_TITLE_SINGLE_PHOTO_RU = "Сохранить изображение в профайл";
    ContentProperties.MODAL_TEXT_NOT_LOGGED_IN_RU = "Чтобы добавить фотосет или изображение в профайл необходимо авторизоваться";
    //Overlay post
    ContentProperties.SHOW_ALL_PICS_RU = "Все фотографии";
    ContentProperties.SHOW_ALL_PICS_FULL_RU = "Все фотографии этого фотосета";
    ContentProperties.OPEN_SINGLE_POST_RU = "Увеличить изображение";
    //Page Dtagails
    ContentProperties.DETAILS_SAVE_POST_IN_DASHBOARD_RU = "Сохранить фотосет";
    ContentProperties.DETAILS_POST_ALREADY_SAVED_RU = "Фотосет уже сохранен";
    ContentProperties.DETAILS_POST_SUCCESSFULLY_SAVED_RU = "Фотосет сохранен";
    ContentProperties.OPEN_POST_IN_VK_RU = "Открыть фотосет в VK";
    //Social
    ContentProperties.DESCRIPTION_ADDITON_RU = "Young Folks Модели и фотографы со всего мира";
    ContentProperties.SHARE_BUTTON_TEXT_RU = "Поделиться";
    //
    //    ENG
    //
    ContentProperties.MAIN_TITLE_ENG = "Young Folks - Models and photographers from all over the world";
    ContentProperties.NATIVE_LIST_TITLE_ENG = "Young Folks - Models and photographers from Russia, Ukraine, Byelorussia, Kazakhstan";
    ContentProperties.ART_LIST_TITLE_ENG = "Young Folks - Art";
    ContentProperties.SETS_LIST_TITLE_ENG = "Young Folks - Зарубежные модели и фотографы";
    ContentProperties.SILHOUETTES_LIST_TITLE_ENG = "Young Folks - Silhouettes of models";
    ContentProperties.MD_DETAILS_TITLE_ENG = "Model:";
    ContentProperties.PH_DETAILS_TITLE_ENG = "Photographer:";
    ContentProperties.DASHBOARD_TITLE_ENG = "Dashboard";
    //Navigation
    ContentProperties.SEARCH_INQUERY_ENG = "Model / Photographer";
    ContentProperties.SEARCH_ENG = "Search";
    ContentProperties.ENTER_ENG = "Login";
    ContentProperties.EXIT_ENG = "Logout";
    ContentProperties.VK_BUTTON_TEXT_ENG = "Login with  VK";
    ContentProperties.FB_BUTTON_TEXT_ENG = "Login with  Facebook";
    //Pages
    ContentProperties.MAIN_PAGE_ENG = "Home";
    ContentProperties.NATIVE_ENG = "Russian models";
    ContentProperties.SETS_ENG = "Foreign models";
    ContentProperties.SILHOUETTES_ENG = "Silhouettes";
    ContentProperties.ART_ENG = "Art";
    //Titles
    ContentProperties.NOTING_FOUND_ENG = "Nothing has been found on request";
    //Content
    ContentProperties.NEW_NATIVE_TITLE_ENG = "New photos of russian models";
    ContentProperties.NEW_SETS_TITLE_ENG = "New pictures of foreign models";
    ContentProperties.SUGGESTED_POSTS_TITLE_ENG = "Related Photoshoots";
    ContentProperties.SAVED_POSTS_TITLE_ENG = "Saved Photoshoots";
    ContentProperties.SAVED_PHOTOS_TITLE_ENG = "Saved pictures";
    ContentProperties.NO_SAVED_PHOTOS_ENG = "You haven't saved any pictures yet";
    ContentProperties.NO_SAVED_POSTS_ENG = "You haven't saved any photoshoots yet";
    ContentProperties.WEEKLY_TOP_SETS_ENG = "Weekly top of foreign models";
    ContentProperties.WEEKLY_TOP_NATIVE_ENG = "Weekly top of russian models";
    //Modal
    ContentProperties.CLOSE_MODAL_ENG = "close";
    ContentProperties.MODAL_TITLE_PHOTOSET_ENG = "Save photoshoot in dashboard";
    ContentProperties.MODAL_TITLE_SINGLE_PHOTO_ENG = "Save picture in dashboard";
    ContentProperties.MODAL_TEXT_NOT_LOGGED_IN_ENG = "To save picture or photoshoot you need to login";
    //Overlay post
    ContentProperties.SHOW_ALL_PICS_ENG = "All pictures";
    ContentProperties.SHOW_ALL_PICS_FULL_ENG = "All photos of this photoshoot";
    ContentProperties.OPEN_SINGLE_POST_ENG = "Click on picture to enlarge";
    //Page Dtagails
    ContentProperties.DETAILS_SAVE_POST_IN_DASHBOARD_ENG = "Saved photoshoot";
    ContentProperties.DETAILS_POST_ALREADY_SAVED_ENG = "This photoshoot already saved";
    ContentProperties.DETAILS_POST_SUCCESSFULLY_SAVED_ENG = "Photoshoot is saved";
    ContentProperties.OPEN_POST_IN_VK_ENG = "Open photoshoot in VK";
    //Social
    ContentProperties.DESCRIPTION_ADDITON_ENG = "Young Folks Models and photographers from all over the world";
    ContentProperties.SHARE_BUTTON_TEXT_ENG = "Share";
    return ContentProperties;
}());
exports.ContentProperties = ContentProperties;
//# sourceMappingURL=content.properties.js.map