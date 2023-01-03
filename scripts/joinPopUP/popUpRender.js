import { popUpBlock } from "./popUpBlock";
import { popUpScript } from "./popUpScript";

export function renderPopUp() {
  document
    .querySelector(".wrapper")
    .insertAdjacentHTML("afterbegin", popUpBlock());
  popUpScript();
}
