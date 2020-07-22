(($: JQueryStatic) => {
  const n = "footer";

  const iconNames = ["facebook", "instagram-icon", "youtube"];
  const iconBtn = `
    <a style="display:inline-block;margin:0 8px;" rel="noreferrer noopener" target="_blank" href="{URL}">
      <img
        class="social-icon"
        src="https://raw.githubusercontent.com/sugarflakes/svg-icon/master/dist/svg/logos/{NAME}.svg"
        alt=""
      />
    </a>
  `;
  $("body").append(`
    <style>
      .social-icon {
        display: block;
        align-self: center;
        max-width: 100%;
        _filter: invert(1);
        width: 25px;
        height: 25px;
      }
    </style>
  `);

  fetch("/data/" + n + ".html?v=" + +new Date())
    .then((r) => r.text())
    .then((r) => {
      $("#" + n).html(r.trim());
      fetch("/data/social")
        .then((r) => r.text())
        .then((r) => {
          let links = r.split("\n").map((item) => item.replace(/\s/g, ""));
          links = links.filter((item) => !!item);
          links.forEach((url, i) => {
            $(".social-btns").append(
              iconBtn.replace("{URL}", url).replace("{NAME}", iconNames[i]),
            );
          });
        });
    });
})(jQuery);
