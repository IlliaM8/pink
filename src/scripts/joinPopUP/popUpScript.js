export function popUpScript() {
  const container = document.querySelector(".pop-up__container");
  const wrapper = document.querySelector(".wrapper");

  function animate() {
    container.classList.add("activeted");
  }
  function closePopUP(e) {
    if (
      e.target.id === "close" ||
      e.target.id === "line" ||
      e.target.id === "cont" ||
      e.target.id === "regLink"
    ) {
      wrapper.removeChild(container);
    }
  }
  function openRegPage(e) {
    if (e.target.id === "regLink") {
      reg.click();
      closePopUP(e);
    }
  }

  document.addEventListener("click", (e) => {
    closePopUP(e);
    openRegPage(e);
  });

  setTimeout(() => animate(), 100);
}
