(function ($) {
    var n = "footer";
    var iconNames = ["facebook", "instagram-icon", "youtube"];
    var iconBtn = "\n    <a style=\"display:inline-block;margin:0 8px;\" rel=\"noreferrer noopener\" target=\"_blank\" href=\"{URL}\">\n      <img\n        class=\"social-icon\"\n        src=\"https://raw.githubusercontent.com/sugarflakes/svg-icon/master/dist/svg/logos/{NAME}.svg\"\n        alt=\"\"\n      />\n    </a>\n  ";
    $("body").append("\n    <style>\n      .social-icon {\n        display: block;\n        align-self: center;\n        max-width: 100%;\n        _filter: invert(1);\n        width: 25px;\n        height: 25px;\n      }\n    </style>\n  ");
    fetch("/data/" + n + ".html?v=" + +new Date())
        .then(function (r) { return r.text(); })
        .then(function (r) {
        $("#" + n).html(r.trim());
        fetch("/data/social")
            .then(function (r) { return r.text(); })
            .then(function (r) {
            var links = r.split("\n").map(function (item) { return item.replace(/\s/g, ""); });
            links = links.filter(function (item) { return !!item; });
            links.forEach(function (url, i) {
                $(".social-btns").append(iconBtn.replace("{URL}", url).replace("{NAME}", iconNames[i]));
            });
        });
    });
})(jQuery);
