function About($) {
    var title = $("#chef-at-your-home-title");
    var text = $("#chef-at-your-home-text");
    fetch("/data/home/chef-at-your-home-text.html")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        text.html(r.trim());
    });
    fetch("/data/home/chef-at-your-home-title.html")
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
