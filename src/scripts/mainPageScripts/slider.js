export function slider() {
  const slList = document.querySelector(".slider__list");
  const blocks = document.querySelectorAll(".slider__content");
  const rightArrow = document.querySelector(".arrow-right");
  const leftArrow = document.querySelector(".arrow-left");
  let count = 0;
  function getWidth() {
    let sl = document.querySelector(".slider");
    if (sl) {
      return sl.offsetWidth;
    } else {
      return false;
    }
  }
  /////....... resizing........
  function init() {
    slList.style.width = getWidth() * blocks.length + "px";
    blocks.forEach((block) => {
      block.style.width = getWidth() + "px";
      block.style.height = "auto";
    });
    slide();
  }
  init();

  window.addEventListener("resize", init);
  // ............arrow sliding

  function clickOnArow() {
    leftArrow.addEventListener("click", (e) => {
      e.preventDefault;
      count--;
      if (count < 0) count = blocks.length - 1;
      slide();
      addAndRemoveActive();
    });
    rightArrow.addEventListener("click", (e) => {
      e.preventDefault;
      count++;
      if (count >= blocks.length) count = 0;
      slide();
      addAndRemoveActive();
    });
  }
  clickOnArow();

  function slide() {
    slList.style.transform = `translateX(${-getWidth() * count + "px"} )`;
  }

  // ....swipe...
  function swipe() {
    const slider = document.querySelector(".slider__list");
    let x1 = 0;
    let x2 = 0;
    let xDiff = 0;

    slider.addEventListener("touchstart", TouchStart);
    slider.addEventListener("touchmove", TouchMove);
    slider.addEventListener("touchend", swipe);

    function TouchStart(e) {
      x1 = e.touches[0].clientX;
    }
    function TouchMove(e) {
      x2 = e.touches[0].clientX;
      xDiff = x2 - x1;
    }

    function swipe(e) {
      if (xDiff > 0) {
        count++;
        if (count >= blocks.length) count = 0;
        slide();
        addAndRemoveActive();
      } else {
        count--;
        if (count < 0) count = blocks.length - 1;
        slide();
        addAndRemoveActive();
      }
    }
  }
  swipe();
  //.........paginaniton........

  let circles = 0;
  function puginationInit() {
    for (let i = 0; i < blocks.length; i++) {
      const cirlce = document.createElement("div");
      cirlce.classList.add("pagination__circle");
      document.querySelector(".slider__pagination").append(cirlce);
    }
    circles = [...document.querySelectorAll(".pagination__circle")];
    circles[0].classList.add("active");

    function pugButtonSlides() {
      for (let i = 0; i < circles.length; i++) {
        circles[i].addEventListener("click", (e) => {
          if (e.target == document.querySelector(".active")) return null;
          count = i;
          slide();
          addAndRemoveActive();
        });
      }
    }
    pugButtonSlides();
  }
  puginationInit();
  function addAndRemoveActive() {
    let actives = document.querySelectorAll(".active");
    circles[count].classList.add("active");
    for (const elem of actives) {
      elem.classList.remove("active");
    }
  }
}
