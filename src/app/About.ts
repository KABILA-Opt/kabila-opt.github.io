function About($: JQueryStatic) {
  let title = $("#chef-at-your-home-title");
  let text = $("#chef-at-your-home-text");

  fetch("/data/home/chef-at-your-home-text.html")
    .then((r) => r.text())
    .then((r) => {
      text.html(r.trim());
    });

  fetch("/data/home/chef-at-your-home-title.html")
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
