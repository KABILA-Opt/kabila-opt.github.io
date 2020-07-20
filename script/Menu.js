(function ($) {
    var root = "/data/menu";
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
    [1, 2, 3, 4].forEach(function (n) {
        ["photo", "text.html", "title"].forEach(function (k) {
            fetch(itemRoot + n + "/" + k)
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
                        $("#item-" + n + " .photo-cell").css("background-image", "url(" + filename + ")");
                        $("#item-" + n + " .photo").attr("src", filename);
                        break;
                    case "title":
                        $("#item-" + n + " .title").html(data);
                        break;
                    case "text.html":
                        $("#item-" + n + " .text").html(data);
                        break;
                }
            });
        });
    });
})(jQuery);
