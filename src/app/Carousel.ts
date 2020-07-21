(($: JQueryStatic) => {
  const slide = `
    <div class="carousel-item">
      <img
        src="{SOURCE}"
        class="d-block w-100"
        alt=""
      />
    </div>
  `;

  fetch("/data/" + locale() + "/home/carousel")
    .then((r) => r.text())
    .then((r) => {
      const carouselPhotos = $("#carousel-photos");

      carouselPhotos.html("");
      let list = r.split("\n").map((item) => item.replace(/\s/g, ""));
      list = list.filter((item) => !!item);
      list.forEach((filename, i) => {
        const slideElm = $(
          slide.replace(
            "{SOURCE}",
            IMG_FOLDER + "/" + filename + "?v=" + +new Date(),
          ),
        );
        if (i === 0) slideElm.addClass("active");
        carouselPhotos.append(slideElm);
      });
    });
})(jQuery);
