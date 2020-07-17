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

  const settings: any = {
    //TODO
  };

  fetch("/data/home/carousel")
    .then((r) => r.text())
    .then((r) => {
      carouselPhotos.html("");
      let list = r.split("\n").map((item) => item.replace(/\s/g, ""));
      list = list.filter((item) => !!item);
      list.forEach((filename, i) => {
        const slideElm = $(
          slide.replace("{SOURCE}", IMG_FOLDER + "/" + filename),
        );
        if (i === 0) slideElm.addClass("active");
        carouselPhotos.append(slideElm);
      });
      // @ts-ignore
      $(".carousel").slick(settings);
    });
}
