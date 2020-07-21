(function ($) {
    var n = "locales";
    fetch("/data/" + n + ".html")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        $("#" + n).html(r.trim());
    });
    var lang = (params("locale") || "en");
    locale(lang);
})(jQuery);
