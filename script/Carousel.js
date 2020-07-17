function Carousel($) {
    var carouselPhotos = $("#carousel-photos");
    var slide = "\n    <li class=\"glide__slide\">\n      <img src=\"{SOURCE}\" />\n    </li>\n  ";
    var settings = {};
    fetch("/data/home/carousel")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        carouselPhotos.html("");
        var list = r.split("\n").map(function (item) { return item.replace(/\s/g, ""); });
        list = list.filter(function (item) { return !!item; });
        list.forEach(function (filename, i) {
            var slideElm = $(slide.replace("{SOURCE}", IMG_FOLDER + "/" + filename));
            if (i === 0)
                slideElm.addClass("active");
            carouselPhotos.append(slideElm);
        });
        new Glide(".glide").mount();
    });
}
