(($: JQueryStatic) => {
  fetch("/data/" + locale() + "/home/hours")
    .then((r) => r.text())
    .then((r) => {
      const elm = $("#hours");
      elm.html("");
      let list = r.split("\n").map((item) => item.trim());
      list = list.filter((item) => !!item && item[0] !== "#");
      list.forEach((text) => {
        elm.append(`<span>${text}</span>`);
      });
    });
})(jQuery);
