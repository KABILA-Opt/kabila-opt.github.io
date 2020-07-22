(($: JQueryStatic) => {
  const n = "topbar";
  fetch("/data/" + n + ".html?v=" + +new Date())
    .then((r) => r.text())
    .then((r) => {
      $("#" + n).html(r.trim());

      LOCALES.forEach((lang) => {
        $("#locale-" + lang).on("click", () => {
          locale(lang);
          window.location.reload();
        });
      });
    });
})(jQuery);
