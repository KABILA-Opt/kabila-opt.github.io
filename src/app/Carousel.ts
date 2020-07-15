function Carousel($: JQueryStatic) {
  const carouselPhotos = $("#carousel-photos");
  const slide = `
    <div class="carousel-item">
      <img
        src="{SOURCE}"
        class="d-block w-100"
        alt=""
      />
    </div>
  `;

  fetch("/data/carousel")
    .then((r) => r.text())
    .then((r) => {
      carouselPhotos.html("");
      let list = r.split("\n").map((item) => item.replace(/\s/g, ""));
      list = list.filter((item) => !!item);
      list.forEach((filename) => {
        carouselPhotos.append(
          slide.replace("{SOURCE}", IMG_FOLDER + "/" + filename),
        );
      });
    });
}
