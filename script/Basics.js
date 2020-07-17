function Basics($) {
    var orderLinks = $(".order-link");
    var intro = $("#intro");
    var title = $("#intro-title");
    fetch("/data/home/intro-title")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        title.html(r);
    });
    fetch("/data/home/order-link")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        orderLinks.attr("href", r.replace(/\s/g, ""));
    });
    fetch("/data/home/main-photo")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        intro.css("background-image", "url(" + IMG_FOLDER + "/" + r.replace(/\s/g, "") + ")");
    });
}
