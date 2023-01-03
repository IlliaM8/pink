import "../../../styles/popUp.css";

export function popUpBlock() {
  return `
    <div id='cont' class="pop-up__container">
      <div class="pop-up__content">
        <div id='close'class="pop-up__cross">
          <span id='line' class="cross__bar"></span>
          <span id='line'class="cross__bar"></span>
        </div>
        <form class="pop-up__form"action="#">
        <div class="pop-up__block">
          <label for="popUpName">Имя пользователя:</label>
          <input id='popUpName' class="pop-up__input" type="text" placeholder="Введите имя" />
        </div>
        <div class="pop-up__block">
          <label for="popUpPass">Пароль:</label>
          <input id='popUpPass' class="pop-up__input " type="text" placeholder="Введите пароль" />
        </div>
          <div class="pop-up__registr">
            Eсли нет аккаунта  <a id='regLink' href="#">Зарегистрируйтесь</a>
          </div>
          <button class="pop-up__button" type="submit">Войти</button>
        </form>
      </div>
    </div>
    `;
}
