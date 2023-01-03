export function validation() {
  const form = document.querySelector(".reg-form"),
    name = document.querySelector("#formName"),
    pass = document.querySelector("#formPass"),
    pass2 = document.querySelector("#formPass2"),
    phone = document.querySelector("#formPhone"),
    email = document.querySelector("#formEmail"),
    inputs = document.querySelectorAll(".reg-form__input");
  let nameValue;
  let passValue;
  let pass2Value;
  let phoneValue;
  let emailValue;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    for (elm of inputs) {
      if (elm.value.trim() === "") {
        addError(elm);
      } else {
      }
    }
  });

  for (elm of inputs) {
    elm.addEventListener("input", (e) => {
      if (e.target === name) {
        nameValue = name.value.trim();
        if (nameValue == "") {
          addError(name);
        } else addSucces(name);
      }
      if (e.target === pass) {
        passValue = pass.value.trim();
        if (passValue === "") {
          addError(pass);
        } else if (!validatePassword(passValue)) {
          addError(pass, "Неподходящий пароль");
        } else {
          addSucces(pass);
        }
      }
      if (e.target === pass2) {
        pass2Value = pass2.value.trim();
        if (pass2Value === "") {
          addError(pass2);
        } else if (pass2Value !== passValue) {
          addError(pass2, "Пароли не совпадают");
        } else addSucces(pass2);
      }
      if (e.target === phone) {
        phoneValue = phone.value.trim();
        if (phoneValue === "") {
          addError(phone);
        } else if (!validatePhone(phoneValue)) {
          addError(phone, "Не действительный номер");
        } else addSucces(phone);
      }
      if (e.target === email) {
        emailValue = email.value.trim();
        if (emailValue === "") {
          addError(email);
        } else if (!emailValidation(emailValue)) {
          addError(email, "Не действительный E-Mail");
        } else addSucces(email);
      }
    });
  }
  function addError(place, errorText = "Это поле не может быть пустым") {
    let parent = place.parentNode;
    parent.classList.add("error");
    parent.querySelector(".error-message").textContent = errorText;
    if (parent.classList.contains("success")) {
      parent.classList.remove("success");
    }
  }
  function addSucces(place) {
    let parent = place.parentNode;
    parent.classList.add("success");
    parent.classList.remove("error");
  }
  function validatePassword(value) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value);
  }
  function validatePhone(value) {
    return /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
      value
    );
  }
  function emailValidation(value) {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/.test(
      value
    );
  }
}
