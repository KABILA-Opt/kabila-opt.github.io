(function ($) {
    var root = "/data/" + locale() + "/menu";
    fetch(root + "/side-photo")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        $("#side-photo").attr("src", IMG_FOLDER + "/" + r.replace(/\s/g, "") + "?v=" + +new Date());
    });
    ["title", "text"].forEach(function (k) {
        fetch(root + "/allergen-disclaimer-" + k)
            .then(function (r) { return r.text(); })
            .then(function (r) {
            $("#allergen-disclaimer-" + k).text(r.trim());
        });
    });
    var itemRoot = root + "/item-";
    fetch("/data/menu-control")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        var list = r.split("\n").map(function (item) { return item.trim(); });
        list = list.filter(function (item) { return !!item && item[0] !== "#"; });
        list.forEach(function (x) {
            try {
                var n_1 = parseInt(x);
                $("#item-" + n_1).css("display", "block");
                ["photo", "text.html", "title"].forEach(function (k) {
                    fetch(itemRoot + n_1 + "/" + k)
                        .then(function (r) { return r.text(); })
                        .then(function (r) {
                        var data = r.trim();
                        switch (k) {
                            case "photo":
                                var filename = IMG_FOLDER +
                                    "/" +
                                    data.replace(/\s/g, "") +
                                    "?v=" +
                                    +new Date();
                                $("#item-" + n_1 + " .photo-cell").css("background-image", "url(" + filename + ")");
                                $("#item-" + n_1 + " .photo").attr("src", filename);
                                break;
                            case "title":
                                $("#item-" + n_1 + " .title").html(data);
                                break;
                            case "text.html":
                                $("#item-" + n_1 + " .text").html(data);
                                break;
                        }
                    });
                });
            }
            catch (e) {
                console.warn(e);
            }
        });
    });
})(jQuery);
