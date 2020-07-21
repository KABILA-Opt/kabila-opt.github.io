(($: JQueryStatic) => {
  fetch("/data/" + locale() + "/home/chef-text.html")
    .then((r) => r.text())
    .then((r) => {
      $("#chef-text").html(r.trim());
    });

  fetch("/data/" + locale() + "/home/chef-title.html")
    .then((r) => r.text())
    .then((r) => {
      $("#chef-title").html(r.trim());
    });

  fetch("/data/" + locale() + "/home/about-text.html")
    .then((r) => r.text())
    .then((r) => {
      $("#about-text").html(r.trim());
    });

  fetch("/data/" + locale() + "/home/about-title.html")
    .then((r) => r.text())
    .then((r) => {
      $("#about-title").html(r.trim());
    });
})(jQuery);
