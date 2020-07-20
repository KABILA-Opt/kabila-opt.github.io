(function ($) {
    var root = "/data/menu";
    fetch(root + "/side-photo")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        $("#side-photo").attr("src", r.replace(/\s/g, ""));
    });
    var itemRoot = root + "/item-";
    [1, 2, 3].forEach(function (n) {
        ["photo", "text.html", "title"].forEach(function (k) {
            fetch(itemRoot + n + "/" + k)
                .then(function (r) { return r.text(); })
                .then(function (r) {
                var data = r.trim();
                switch (k) {
                    case "photo":
                        var src = data.replace(/\s/g, "");
                        $("#item-" + n + " .photo-cell").css("background-image", "url(" + src + ")");
                        $("#item-" + n + " .photo").attr("src", src);
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
