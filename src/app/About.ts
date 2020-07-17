function About($: JQueryStatic) {
  const title = $("#about-title");
  const text = $("#about-text");

  fetch("/data/home/about-text.html")
    .then((r) => r.text())
    .then((r) => {
      text.html(r.trim());
    });

  fetch("/data/home/about-title.html")
    .then((r) => r.text())
    .then((r) => {
      title.html(r.trim());
    });
}
