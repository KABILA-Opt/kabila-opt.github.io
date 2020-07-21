(function ($) {
    fetch("/data/" + locale() + "/home/chef-text.html")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        $("#chef-text").html(r.trim());
    });
    fetch("/data/" + locale() + "/home/chef-title.html")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        $("#chef-title").html(r.trim());
    });
    fetch("/data/" + locale() + "/home/about-text.html")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        $("#about-text").html(r.trim());
    });
    fetch("/data/" + locale() + "/home/about-title.html")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        $("#about-title").html(r.trim());
    });
})(jQuery);
