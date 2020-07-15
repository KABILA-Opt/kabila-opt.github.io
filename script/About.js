function About($) {
    var title = $("#about-title");
    var text = $("#about-text");
    fetch("/data/about-text.html")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        text.html(r);
    });
    fetch("/data/about-title")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        title.html(r);
    });
}
