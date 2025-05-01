const e = {
  isMsgDisplayed: false,
  main: document.querySelector("main"),
  msg: document.querySelector(".success"),
  emailInput: document.querySelector("#email"),
  errorText: document.querySelector("#email-error"),
  subscriber: document.querySelector(".subscriber-email"),
  buttons: document.querySelectorAll(".button"),
};

function successMessageHandler() {
  if (!e.isMsgDisplayed) {
    displaySuccessMsg();
  } else {
    hideSuccessMsg();
  }
  e.isMsgDisplayed = !e.isMsgDisplayed;
}

function displaySuccessMsg() {
  e.msg.style.display = "";
  e.main.style.display = "none";
}

function hideSuccessMsg() {
  e.main.style.display = "";
  e.msg.style.display = "none";
}

function setSubscriberEmail() {
  successMessageHandler();
  e.subscriber.textContent = e.emailInput.value;
}

function validateEmail() {
  const emailInput = e.emailInput;
  const errorText = e.errorText;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput.value.trim())) {
    addClassAttribute(emailInput, "input-error");
    addClassAttribute(errorText, "show");
  } else {
    removeClassAttribute(emailInput, "input-error");
    removeClassAttribute(errorText, "show");
    setSubscriberEmail();
  }
}

function addClassAttribute(element, classname) {
  element.classList.add(classname);
}

function removeClassAttribute(element, classname) {
  element.classList.remove(classname);
}

e.buttons.forEach((btn) => {
  btn.addEventListener("click", validateEmail);
});
