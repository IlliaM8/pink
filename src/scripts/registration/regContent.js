import { title } from "../photoSection/blocks";
import { renderTitle } from "../photoSection/photoPageContent";
import { regFormBlock } from "./regForm";
import { validation } from "./regFormScript";
export function renderRegPage() {
  renderTitle("Поделитесь своей <br> историей");
  renderForm();
}

function renderForm() {
  document
    .querySelector(".footer")
    .insertAdjacentHTML("beforebegin", regFormBlock());
  validation();
}
