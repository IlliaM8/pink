import { renderPopUp } from "./popUpRender";

export function mainJoinButton() {
  document.querySelectorAll(".intro__download-button").forEach((elm) => {
    elm.addEventListener("click", (e) => {
      e.preventDefault;
      renderPopUp();
    });
  });
}
