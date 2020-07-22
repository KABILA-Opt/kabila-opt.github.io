(function ($) {
    var keys = [
        "about",
        "chef-at-home",
        "contact-us",
        "kabila-menu",
        "menu",
        "opening-hours",
        "order-now",
    ];
    keys.forEach(function (k) {
        fetch("/data/" + locale() + "/translate/" + k)
            .then(function (r) { return r.text(); })
            .then(function (r) {
            $(".translate-" + k).text(r.trim());
        });
    });
})(jQuery);
