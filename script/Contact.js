(function ($) {
    fetch("/data/" + locale() + "/home/google-map")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        $("#google-map").html(r.trim());
    });
    fetch("/data/" + locale() + "/home/contact")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        var elm = $("#contact");
        elm.html("");
        var list = r.split("\n").map(function (item) { return item.trim(); });
        list = list.filter(function (item) { return !!item && item[0] !== "#"; });
        list.forEach(function (text) {
            elm.append("<div>" + text + "</div>");
        });
    });
})(jQuery);
