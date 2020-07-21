(function ($) {
    var n = "footer";
    fetch("/data/" + n + ".html")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        $("#" + n).html(r.trim());
    });
})(jQuery);
