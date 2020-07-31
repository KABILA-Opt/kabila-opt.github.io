(($: JQueryStatic) => {
  fetch("/data/" + locale() + "/home/google-map")
    .then((r) => r.text())
    .then((r) => {
      $("#google-map").html(r.trim());
    });

  fetch("/data/" + locale() + "/home/contact")
    .then((r) => r.text())
    .then((r) => {
      const elm = $("#contact");
      elm.html("");
      let list = r.split("\n").map((item) => item.trim());
      list = list.filter((item) => !!item && item[0] !== "#");
      list.forEach((text) => {
        elm.append(`<div>${text}</div>`);
      });
    });
})(jQuery);
