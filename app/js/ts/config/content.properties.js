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
    return ContentProperties;
}());
exports.ContentProperties = ContentProperties;
//# sourceMappingURL=content.properties.js.map