let elements = {
  mainIsDisplayed: true,
  main: document.querySelector("main"),
  popup: document.querySelector(".success"),
  buttons: document.querySelectorAll(".button"),
};

function showHtmlElement() {
  if (elements.mainIsDisplayed) {
    elements.main.style.display = "none";
    elements.popup.style.display = "";
    elements.mainIsDisplayed = false;
  } else {
    elements.main.style.display = "";
    elements.popup.style.display = "none";
    elements.mainIsDisplayed = true;
  }
}

function isEmailValidate() {
  return false;
}

elements.buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (isEmailValidate) {
      showHtmlElement();
    }
  });
});
