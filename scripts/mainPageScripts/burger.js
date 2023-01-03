export function burger() {
  const burger = document.querySelector(".header__burger");
  const headerList = document.querySelector(".header__list");
  const header = document.querySelector(".header");
  document.addEventListener("click", (e) => {
    if (e.target.id === "bar") {
      burger.classList.toggle("act");
      headerList.classList.toggle("act");
      header.classList.toggle("act");
    } else {
      burger.classList.remove("act");
      headerList.classList.remove("act");
      header.classList.remove("act");
    }
  });
}
