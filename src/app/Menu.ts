(($: JQueryStatic) => {
  let root = "/data/menu";

  fetch(root + "/side-photo")
    .then((r) => r.text())
    .then((r) => {
      $("#side-photo").attr("src", IMG_FOLDER + "/" + r.replace(/\s/g, ""));
    });

  ["title", "text"].forEach((k) => {
    fetch(root + "/allergen-disclaimer-" + k)
      .then((r) => r.text())
      .then((r) => {
        $("#allergen-disclaimer-" + k).text(r.trim());
      });
  });

  let itemRoot = root + "/item-";
  [1, 2, 3].forEach((n) => {
    ["photo", "text.html", "title"].forEach((k) => {
      fetch(itemRoot + n + "/" + k)
        .then((r) => r.text())
        .then((r) => {
          let data = r.trim();
          switch (k) {
            case "photo":
              let src = data.replace(/\s/g, "");
              $(`#item-${n} .photo-cell`).css(
                "background-image",
                `url(${src})`,
              );
              $(`#item-${n} .photo`).attr("src", IMG_FOLDER + "/" + src);
              break;

            case "title":
              $(`#item-${n} .title`).html(data);
              break;

            case "text.html":
              $(`#item-${n} .text`).html(data);
              break;
          }
        });
    });
  });
})(jQuery);
