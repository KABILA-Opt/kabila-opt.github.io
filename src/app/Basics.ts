function Basics($: JQueryStatic) {
  const orderLinks = $(".order-link");
  const intro = $("#intro");
  const title = $("#intro-title");

  fetch("/data/intro-title")
    .then((r) => r.text())
    .then((r) => {
      title.html(r);
    });

  fetch("/data/order-link")
    .then((r) => r.text())
    .then((r) => {
      orderLinks.attr("href", r.replace(/\s/g, ""));
    });

  fetch("/data/main-photo")
    .then((r) => r.text())
    .then((r) => {
      intro.css("background-image", `url(${r.replace(/\s/g, "")})`);
    });
}
