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

function isEmailValid() {
  const emailInput = document.getElementById("email");
  const errorText = document.getElementById("email-error");
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    emailInput.classList.add("input-error");
    errorText.classList.add("show");
  } else {
    emailInput.classList.remove("input-error");
    errorText.classList.remove("show");
    showHtmlElement();
  }
}

elements.buttons.forEach((btn) => {
  btn.addEventListener("click", isEmailValid);
});
