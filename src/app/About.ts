function About($: JQueryStatic) {
  let title = $("#chef-title");
  let text = $("#chef-text");

  fetch("/data/home/chef-text.html")
    .then((r) => r.text())
    .then((r) => {
      text.html(r.trim());
    });

  fetch("/data/home/chef-title.html")
    .then((r) => r.text())
    .then((r) => {
      title.html(r.trim());
    });

  title = $("#about-title");
  text = $("#about-text");

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
