(function ($) {
    console.log("current locale", locale());
    var n = "locales";
    fetch("/data/" + n + ".html")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        $("#" + n).html(r.trim());
        LOCALES.forEach(function (lang) {
            $("#locale-" + lang).on("click", function () {
                locale(lang);
                window.location.reload();
            });
        });
    });
})(jQuery);
