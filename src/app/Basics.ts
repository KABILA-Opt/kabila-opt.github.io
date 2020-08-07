(($: JQueryStatic) => {
  ["doordash", "ubereats"].forEach((k) => {
    fetch(`/data/btn-${k}.html`)
      .then((r) => r.text())
      .then((r) => {
        $(`.btn-${k}`).html(r.trim());
      });
  });

  fetch("/data/" + locale() + "/home/intro-title.html")
    .then((r) => r.text())
    .then((r) => {
      $("#intro-title").html(r.trim());
    });

  fetch("/data/" + locale() + "/home/order-link")
    .then((r) => r.text())
    .then((r) => {
      $(".order-link").attr("href", r.replace(/\s/g, ""));
    });

  fetch("/data/" + locale() + "/home/main-photo")
    .then((r) => r.text())
    .then((r) => {
      $("#intro").css(
        "background-image",
        `url(${IMG_FOLDER}/${r.replace(/\s/g, "")}?v=${+new Date()})`,
      );
    });
})(jQuery);
