export const panorama = {
  img: new URL(
    "../../images/photoPage/wall/panorama-desktop.jpg",
    import.meta.url
  ),
  name: "Анна",
  likesQnt: "123",
  text: "Прыгать или нет? Напишите в комментарии свой совет и смотрите прямую трансляцию в перископе, задавайте свои вопросы!",
};

export class ModelObj {
  constructor(text = "Enter text", img) {
    this.text = text;
    this.img = img;
    this.likesQnt = 0;
    this.name = "cal";
  }
}

export const model = [
  {
    img: new URL("../../images/photoPage/wall/photo-1.png", import.meta.url),
    name: "Левон",
    likesQnt: "123",
    text: "Вчера он на луну летал, сегодня в руки к нам попал.",
  },
  {
    img: new URL("../../images/photoPage/wall/photo-2.png", import.meta.url),
    name: "Антон",
    likesQnt: "123",
    text: "Соседи будут рады!",
  },
  {
    img: new URL("../../images/photoPage/wall/photo-3.png", import.meta.url),
    name: "Борис",
    likesQnt: "123",
    text: "Здесь могла быть ваша цитата о высоком и вечном.",
  },
  {
    img: new URL("../../images/photoPage/wall/photo-4.png", import.meta.url),
    name: "Сергей",
    likesQnt: "123",
    text: "Самая кубанская в мире!",
  },
  {
    img: new URL("../../images/photoPage/wall/photo-5.png", import.meta.url),
    name: "Максим",
    likesQnt: "123",
    text: "Где снег-то?",
  },
  {
    img: new URL("../../images/photoPage/wall/photo-6.png", import.meta.url),
    name: "Надежда",
    likesQnt: "123",
    text: "Всем GM и взаимные лайки!",
  },
];
