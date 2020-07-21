function About($) {
    var title = $("#chef-title");
    var text = $("#chef-text");
    fetch("/data/home/chef-text.html")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        text.html(r.trim());
    });
    fetch("/data/home/chef-title.html")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        title.html(r.trim());
    });
    title = $("#about-title");
    text = $("#about-text");
    fetch("/data/home/about-text.html")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        text.html(r.trim());
    });
    fetch("/data/home/about-title.html")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        title.html(r.trim());
    });
}
