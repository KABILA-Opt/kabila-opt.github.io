function Contact($: JQueryStatic) {
  const elm = $("#contact");

  fetch("/data/contact")
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
