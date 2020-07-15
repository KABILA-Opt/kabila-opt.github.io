function Contact($) {
    var elm = $("#contact");
    fetch("/data/contact")
        .then(function (r) { return r.text(); })
        .then(function (r) {
        var list = r.split("\n").map(function (item) { return item.trim(); });
        list = list.filter(function (item) { return !!item && item[0] !== "#"; });
        list.forEach(function (text) {
            elm.append("<span>" + text + "</span>");
        });
    });
}
