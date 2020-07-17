function Carousel($: JQueryStatic) {
  const carouselPhotos = $("#carousel-photos");
  const slide = `
    <li class="glide__slide">
      <img src="{SOURCE}" />
    </li>
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
      new Glide(".glide").mount();
    });
}
