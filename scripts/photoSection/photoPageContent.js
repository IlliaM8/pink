import { wallPlates, title, subtitle, dayPpanorama } from "./blocks";
import { model, panorama } from "./model";
import { photoEditBlock } from "./photoEditBlock";
import { photoEditorInit } from "./photoEditScript";

export function renderContent() {
  renderTitle("Фотографии <br> пользователей");
  renderSubtitle(
    "Взгляните на фотографии, которые выкладывают пользователи!Видите, как не хватает ваших?"
  );
  renderPanarama();
  renderWall();
  renderSubtitle(
    "Затмите их всех!<br>Выкладывайте все, что накопилось в телефоне!"
  );
  photoEditRender();
}

export function renderTitle(text) {
  document
    .querySelector(".footer")
    .insertAdjacentHTML("beforebegin", title(text));
}
function renderSubtitle(text) {
  document
    .querySelector(".footer")
    .insertAdjacentHTML("beforebegin", subtitle(text));
}
function renderPanarama() {
  document
    .querySelector(".footer")
    .insertAdjacentHTML("beforebegin", dayPpanorama(panorama));
}
export function renderWall() {
  const wallModel = model.reverse().map((e) => {
    return wallPlates(e);
  });
  document
    .querySelector(".wall__container")
    .insertAdjacentHTML("afterbegin", wallModel.join(""));
}
function photoEditRender() {
  document
    .querySelector(".footer")
    .insertAdjacentHTML("beforebegin", photoEditBlock());
  photoEditorInit();
}
