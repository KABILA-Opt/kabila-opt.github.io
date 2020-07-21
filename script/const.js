var IMG_FOLDER = "/img";
var convenientStore = function (key, value) {
    if (value === undefined)
        return window.localStorage.getItem(key);
    return window.localStorage.setItem(key, value.toString());
};
var LOCALE_KEY = "__locale";
function params(k) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(k);
}
function locale(v) {
    if (!v) {
        return convenientStore(LOCALE_KEY) || "en";
    }
    convenientStore(LOCALE_KEY, v);
}
