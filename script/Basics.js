(function ($) {
    ["doordash", "ubereats"].forEach(function (k) {
        fetch("/data/home/btn-" + k + ".html")
            .then(function (r) { return r.text(); })
            .then(function (r) {
            $(".btn-" + k).html(r.trim());
        });
    });
    fetch("/data/" + locale() + "/home/intro-title.html")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        $("#intro-title").html(r.trim());
    });
    fetch("/data/" + locale() + "/home/order-link")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        $(".order-link").attr("href", r.replace(/\s/g, ""));
    });
    fetch("/data/" + locale() + "/home/main-photo")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        $("#intro").css("background-image", "url(" + IMG_FOLDER + "/" + r.replace(/\s/g, "") + "?v=" + +new Date() + ")");
    });
})(jQuery);
