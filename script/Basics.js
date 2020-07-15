function Basics($) {
    var orderLinks = $(".order-link");
    var intro = $("#intro");
    var title = $("#intro-title");
    fetch("/data/intro-title.txt")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        title.html(r);
    });
    fetch("/data/orker-link.txt")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        orderLinks.attr("href", r.replace(/\s/g, ""));
    });
    fetch("/data/main-photo.txt")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        intro.css("background-img", "url(" + r.replace(/\s/g, "") + ")");
    });
}
