(($: JQueryStatic) => {
  const n = "footer";
  fetch("/data/" + n + ".html")
    .then((r) => r.text())
    .then((r) => {
      $("#" + n).html(r.trim());
    });
})(jQuery);
