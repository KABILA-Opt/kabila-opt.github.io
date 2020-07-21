(($: JQueryStatic) => {
  console.log("current locale", locale());
  const n = "locales";
  fetch("/data/" + n + ".html")
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
