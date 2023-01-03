import { renderPopUp } from "../joinPopUP/popUpRender";
import { renderContent } from "../photoSection/photoPageContent";
import { renderRegPage } from "../registration/regContent";
import {
  getNodes,
  removeMainPageNodes,
  returnMainPageNodes,
  addActiveClassToPage,
  removePhotoPageNodes,
  removeRegPageNodes,
} from "./utilFunctions";

export function headerNavigation() {
  const nodeArrMainPage = [...getNodes()];
  const reversedNodes = nodeArrMainPage.reverse();
  let photoNodes = [];
  let regNodes = [];
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.id === "photo") {
      removeMainPageNodes(nodeArrMainPage);
      removeRegPageNodes(regNodes);
      if (target.classList.contains("menu-active")) {
      } else {
        renderContent();
      }

      addActiveClassToPage(target);
      photoNodes = [...getNodes()];
    }
    if (target.id === "main") {
      removePhotoPageNodes(photoNodes);
      removeRegPageNodes(regNodes);
      returnMainPageNodes(reversedNodes);
      addActiveClassToPage(target);
    }
    if (target.id === "reg") {
      removePhotoPageNodes(photoNodes);
      removeMainPageNodes(nodeArrMainPage);
      if (target.classList.contains("menu-active")) {
      } else {
        renderRegPage();
      }
      addActiveClassToPage(target);
      regNodes = [...getNodes()];
    }
    if (target.id === "join") {
      renderPopUp();
    }
  });
}
