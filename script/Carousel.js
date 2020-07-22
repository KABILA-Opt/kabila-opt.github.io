(function ($) {
    var slide = "\n    <div class=\"carousel-item\">\n      <img\n        src=\"{SOURCE}\"\n        class=\"d-block w-100\"\n        alt=\"\"\n      />\n    </div>\n  ";
    fetch("/data/carousel")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        var carouselPhotos = $("#carousel-photos");
        carouselPhotos.html("");
        var list = r.split("\n").map(function (item) { return item.replace(/\s/g, ""); });
        list = list.filter(function (item) { return !!item; });
        list.forEach(function (filename, i) {
            var slideElm = $(slide.replace("{SOURCE}", IMG_FOLDER + "/" + filename + "?v=" + +new Date()));
            if (i === 0)
                slideElm.addClass("active");
            carouselPhotos.append(slideElm);
        });
    });
})(jQuery);
