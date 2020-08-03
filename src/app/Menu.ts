(($: JQueryStatic) => {
  let root = "/data/" + locale() + "/menu";

  // fetch(root + "/side-photo")
  //   .then((r) => r.text())
  //   .then((r) => {
  //     $("#side-photo").attr(
  //       "src",
  //       IMG_FOLDER + "/" + r.replace(/\s/g, "") + "?v=" + +new Date(),
  //     );
  //   });

  ["title", "text"].forEach((k) => {
    fetch(root + "/allergen-disclaimer-" + k)
      .then((r) => r.text())
      .then((r) => {
        $("#allergen-disclaimer-" + k).text(r.trim());
      });
  });

  let itemRoot = root + "/item-";

  fetch("/data/menu-control")
    .then((r) => r.text())
    .then((r) => {
      let list = r.split("\n").map((item) => item.trim());
      list = list.filter((item) => !!item && item[0] !== "#");
      list.forEach((x) => {
        try {
          let n: number = parseInt(x);
          $(`#item-${n}`).css("display", "block");
          ["photo", "text.html", "title"].forEach((k) => {
            fetch(itemRoot + n + "/" + k)
              .then((r) => r.text())
              .then((r) => {
                let data = r.trim();
                switch (k) {
                  case "photo":
                    let filename =
                      IMG_FOLDER +
                      "/" +
                      data.replace(/\s/g, "") +
                      "?v=" +
                      +new Date();
                    $(`#item-${n} .photo-cell`).css(
                      "background-image",
                      `url(${filename})`,
                    );
                    $(`#item-${n} .photo`).attr("src", filename);
                    break;

                  case "title":
                    $(`#item-${n} .title`).html(`#${n}・${data}`);
                    break;

                  case "text.html":
                    $(`#item-${n} .text`).html(data);
                    break;
                }
              });
          });
        } catch (e) {
          console.warn(e);
        }
      });
    });
})(jQuery);
