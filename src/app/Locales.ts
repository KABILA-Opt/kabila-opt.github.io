(($: JQueryStatic) => {
  const n = "locales";
  fetch("/data/" + n + ".html")
    .then((r) => r.text())
    .then((r) => {
      $("#" + n).html(r.trim());
    });

  let lang: Locale = (params("locale") || "en") as Locale;
  locale(lang);
})(jQuery);
