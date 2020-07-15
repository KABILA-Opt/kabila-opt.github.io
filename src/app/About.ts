function About($: JQueryStatic) {
  const title = $("#about-title");
  const text = $("#about-text");

  fetch("/data/about-text.html")
    .then((r) => r.text())
    .then((r) => {
      text.html(r);
    });

  fetch("/data/about-title")
    .then((r) => r.text())
    .then((r) => {
      title.html(r.replace(/\s/g, ""));
    });
}
