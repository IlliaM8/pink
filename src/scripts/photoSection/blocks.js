const likeIcon = new URL("../../images/photoPage/heart.svg", import.meta.url);

export function title(value) {
  return `<div class ="title-background"> 
            <div class="container container__new-title">
              <p class="title">${value}</p>
           </div>
          </div>`;
}
export function subtitle(value) {
  return ` <div class="container container__new-subtitle">
                <p class="new-text">${value}</p>
          </div>`;
}
export function dayPpanorama(value) {
  return ` 
    <div class="panorama">
      <div class="panorama__img"><img src="${value.img}" alt="" /></div>
      <div class="panorama__container container">
        <div class="panorama__content">
         <div class="panorama-row">
          <div class="name new-text">${value.name}<span>(5  минут назад)</span></div>
          <div class="panorama__likes likes ">Нравится: <spna>${value.likesQnt}</spna>
          <button><img src="${likeIcon}" alt="" srcset=""></button>
          </div>
         </div>
          <div class="description new-text">${value.text}</div>
        </div>
      </div>
    </div>
    <div class="container wall__container"></div>
    `;
}

export function wallPlates(value) {
  return `
    <div class="wall-block">
      <div class="wall-block__img"><img src="${value.img}" alt="" /></div>
      <div class="wall-block__content">
        <div class="wall-block__name name new-text">${value.name}<span>(5 минут назад)</span></div>
         <div class="wall-block__description new-text">${value.text}</div>
          <div class="wall-block__likes likes "><spna> Нравится:${value.likesQnt}</spna>
          <button><img src="${likeIcon}" alt="" srcset=""></button></div>
      </div>
    </div>
  `;
}
