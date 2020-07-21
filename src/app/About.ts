function About($: JQueryStatic) {
  fetch("/data/home/chef-text.html")
    .then((r) => r.text())
    .then((r) => {
      $("#chef-text").html(r.trim());
    });

  fetch("/data/home/chef-title.html")
    .then((r) => r.text())
    .then((r) => {
      $("#chef-title").html(r.trim());
    });

  fetch("/data/home/about-text.html")
    .then((r) => r.text())
    .then((r) => {
      $("#about-text").html(r.trim());
    });

  fetch("/data/home/about-title.html")
    .then((r) => r.text())
    .then((r) => {
      $("#about-title").html(r.trim());
    });
}
