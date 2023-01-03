import { wallPlates } from "./blocks";
import { model, ModelObj } from "./model";
import { renderWall } from "./photoPageContent";

export function photoEditorInit() {
  const imgInput = document.querySelector(".img-input");
  const sliders = document.querySelector(".photo-editor__sliders");
  let slider = document.querySelector(".edit-slider");
  const img = document.querySelector(".photo-editor__img > img");
  let photoEditor = document.querySelector(".photo-editor");
  let mobile = false;

  let hueRotate = 0,
    brightness = 100,
    sturation = 100;

  function loadImg() {
    let file = imgInput.files[0];
    img.src = URL.createObjectURL(file);
    img.onload = document
      .querySelector(".container-red")
      .classList.remove("disable");
  }

  function updateFilter(e) {
    if (e.target.id === "hue") hueRotate = e.target.value;
    if (e.target.id === "br") brightness = e.target.value;
    if (e.target.id === "sat") sturation = e.target.value;
    applyFilters();
  }
  function applyFilters() {
    return (img.style.filter = `saturate(${sturation}%) hue-rotate(${hueRotate}deg) brightness(${brightness}%)`);
  }

  function createCanvas() {
    const canvas = document.createElement("canvas");
    canvas.style.display = "none";
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d");
    ctx.filter = applyFilters();
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    document.body.appendChild(canvas);
    return canvas;
  }

  function saveImg() {
    const link = document.createElement("a");
    link.download = "image.jpg";
    link.href = createCanvas().toDataURL();
    link.click();
  }

  function resetOpt() {
    (hueRotate = 0), (brightness = 100), (sturation = 100);
    document.querySelectorAll(".edit-slider").forEach((elem) => {
      elem.value = 100;
      document.querySelector(".photo-editor__textarea").value = "";
    });
    applyFilters();
  }

  function buttonEventLIst() {
    const butns = document.querySelector(".photo-editor__buttons");
    butns.addEventListener("click", (e) => {
      if (e.target.id === "choose") {
        imgInput.click();
        imgInput.addEventListener("change", loadImg);
      }
      if (e.target.id === "save") {
        saveImg();
      }
      if (e.target.id === "reset") {
        resetOpt();
      }
      if (e.target.id === "post") {
        addToModel();
      }
    });
  }
  function addToModel() {
    let inputText = document.querySelector(".photo-editor__textarea").value;
    if (inputText == "") {
      inputText = "Good Picture";
    }
    let img = createCanvas().toDataURL();

    model.push(new ModelObj(inputText, img));
    console.log(model);
    document
      .querySelector(".wall__container")
      .insertAdjacentHTML(
        "afterbegin",
        wallPlates(new ModelObj(inputText, img))
      );
  }
  // mobile
  function addMobile() {
    if (window.innerWidth <= 667) {
      photoEditor.classList.add("mobile");
    }
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 667) {
      addMobile();
    } else {
      photoEditor.classList.remove("mobile");
    }
  });

  addMobile();
  function changeActive() {
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon) => {
      icon.addEventListener("click", () => {
        document.querySelector(".actives").classList.remove("actives");
        icon.classList.add("actives");

        if (icon.id === "satIcon") {
          slider.value = sturation;
        }
        if (icon.id === "hueIcon") {
          slider.value = hueRotate;
        }
        if (icon.id === "brIcon") {
          slider.value = brightness;
        }
      });
    });
  }
  function filter() {
    slider.addEventListener("input", () => {
      const activeFilter = document.querySelector(".icon.actives").id;

      if (activeFilter === "satIcon") {
        sturation = slider.value;
      }
      if (activeFilter === "hueIcon") {
        hueRotate = slider.value;
      }
      if (activeFilter === "brIcon") {
        brightness = slider.value;
      }
      applyFilters();
    });
  }

  // if mobile
  window.addEventListener("resize", () => {
    mobile = photoEditor.classList.contains("mobile");
    if (mobile) {
      sliders.removeEventListener("input", updateFilter);
      changeActive();
      filter();
    } else {
      sliders.addEventListener("input", updateFilter);
    }
  });

  mobile = photoEditor.classList.contains("mobile");
  if (mobile) {
    changeActive();
    filter();
  } else {
    sliders.addEventListener("input", updateFilter);
  }
  buttonEventLIst();
}
