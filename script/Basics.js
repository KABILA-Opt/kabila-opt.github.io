function Basics($) {
    var orderLinks = $(".order-link");
    var intro = $("#intro");
    var title = $("#intro-title");
    fetch("/data/intro-title")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        title.html(r.replace(/\s/g, ""));
    });
    fetch("/data/orker-link")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        orderLinks.attr("href", r.replace(/\s/g, ""));
    });
    fetch("/data/main-photo")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        intro.css("background-img", "url(" + r.replace(/\s/g, "") + ")");
    });
}
