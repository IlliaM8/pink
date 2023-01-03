import "../../../styles/regForm.css";

let phoneIcon = new URL(
  "../../images/photoPage/regForm/phone.svg",
  import.meta.url
);
let mailIcon = new URL(
  "../../images/photoPage/regForm/mail.svg",
  import.meta.url
);
export function regFormBlock() {
  return `
    <div class="reg-form__container container">
      <form class="reg-form" action="#">
        <div class="reg-form__inf">
          <div class="reg-form__name reg-form__box ">
            <label for="formName">Имя пользователя:</label>
            <input
               name="name"
              class="reg-form__input"
              id="formName"
              type="text"
              placeholder="Укажите имя пользователя*"
            />
            <span class="error-message">eroor message</span>
          </div>
          <div class="reg-form__pass reg-form__box">
            <label for="formName">Пороль:</label>
            <input
              name="pass"
              class="reg-form__input"
              id="formPass"
              type="password"
              placeholder="Придумайте пароль  ( A-z ; 8 )*"
            />
            <span class="error-message">eroor message</span>
          </div>
              <div class="reg-form__pass reg-form__box">
            <label for="formName">Повторите пароль:</label>
            <input
              name="pass2"
              class="reg-form__input"
              id="formPass2"
              type="password"
              placeholder="Повторите пароль *"
            />
            <span class="error-message">eroor message</span>
          </div>
          <div class="reg-form__phone reg-form__box">
            <label for="formPhone"> Номер телефона</label>
              <input
                name="phone"
                class="reg-form__input"
                id="formPhone"
                type="tel"
                placeholder="Укажите номер телефона *"
              />
              <span class="error-message">eroor message</span>
              <div class="input__icon">
                <img src="${phoneIcon}" alt="" />
              </div>
            </div>
          <div class="reg-form__email reg-form__box">
            <label for="formEmail">E-mail</label>
              <input
                name="email"
                class="reg-form__input"
                id="formEmail"
                type="email"
                placeholder="Укажите E-Mail *"
              />
               <span class="error-message">eroor message</span>
              <div class="input__icon">
                <img src="${mailIcon}" alt="" />
              </div>
                </div>

            </div>
            <button type="submit" class="reg-form__button">Отправить</button>
          </div>
        </div>
      </form>
    </div>
    `;
}
