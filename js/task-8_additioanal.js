"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = login => {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  }
};

const isLoginUnique = (logins, login) => {
  if (logins.includes(login)) {
    console.log("Такой логин уже используется!");
    return true;
  } else {
    return false;
  }
};

const addLogin = function(logins, login) {
  const passed = isLoginValid(login) && !isLoginUnique(logins, login);
  if (passed) {
    logins.push(login);
    console.log("Логин успешно добавлен!");
    return true;
  }
};

addLogin(logins, "Ajax");
addLogin(logins, "robotGoogles");
addLogin(logins, "Zod");
addLogin(logins, "jqueryisextremelyfast");
