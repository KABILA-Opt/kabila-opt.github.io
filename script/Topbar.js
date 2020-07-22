(function ($) {
    var n = "topbar";
    fetch("/data/" + n + ".html?v=" + +new Date())
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
