function Basics($: JQueryStatic) {
  const orderLinks = $(".order-link");
  const intro = $("#intro");
  const title = $("#intro-title");

  fetch("/data/intro-title.txt")
    .then((r) => r.text())
    .then((r) => {
      title.html(r);
    });

  fetch("/data/orker-link.txt")
    .then((r) => r.text())
    .then((r) => {
      orderLinks.attr("href", r.replace(/\s/g, ""));
    });

  fetch("/data/main-photo.txt")
    .then((r) => r.text())
    .then((r) => {
      intro.css("background-img", `url(${r.replace(/\s/g, "")})`);
    });
}
