(($: JQueryStatic) => {
  const keys: string[] = [
    "about",
    "chef-at-home",
    "contact-us",
    "kabila-menu",
    "menu",
    "opening-hours",
    "order-now",
  ];
  keys.forEach((k) => {
    fetch("/data/" + locale() + "/translate/" + k)
      .then((r) => r.text())
      .then((r) => {
        $("." + k).text(r.trim());
      });
  });
})(jQuery);
