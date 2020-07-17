function Hours($: JQueryStatic) {
  const elm = $("#hours");

  fetch("/data/home/hours")
    .then((r) => r.text())
    .then((r) => {
      elm.html("");
      let list = r.split("\n").map((item) => item.trim());
      list = list.filter((item) => !!item && item[0] !== "#");
      list.forEach((text) => {
        elm.append(`<span>${text}</span>`);
      });
    });
}
