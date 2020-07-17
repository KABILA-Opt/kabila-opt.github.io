function Contact($: JQueryStatic) {
  const elm = $("#contact");

  fetch("/data/home/google-map")
    .then((r) => r.text())
    .then((r) => {
      $("#google-map").html(r.replace(/\s/g, ""));
    });

  fetch("/data/home/contact")
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
