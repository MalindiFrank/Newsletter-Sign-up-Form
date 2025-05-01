(function () {
  const e = {
    isMsg: false,
  };

  (function () {
    e["main"] = query("main");
    e["msg"] = query(".success");
    e["emailInput"] = query("#email");
    e["errorText"] = query("#email-error");
    e["subscriber"] = query(".subscriber-email");
  })();

  function validateEmail() {
    const email = e.emailInput;
    const errorText = e.errorText;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email.value.trim())) {
      setSubscriberEmail();
    } else {
      addClassAttribute(email, "input-error");
      addClassAttribute(errorText, "show");
      return;
    }
    removeClassAttribute(email, "input-error");
    removeClassAttribute(errorText, "show");
  }

  function successMessageHandler() {
    !e.isMsg ? displaySuccessMsg() : hideSuccessMsg();
    e.isMsg = !e.isMsg;
  }

  function displaySuccessMsg() {
    setDisplayValue(e.msg, "");
    setDisplayValue(e.main, "none");
  }

  function hideSuccessMsg() {
    setDisplayValue(e.main, "");
    setDisplayValue(e.msg, "none");
  }

  function setDisplayValue(element, value) {
    element.style.display = value;
  }

  function setSubscriberEmail() {
    e.subscriber.textContent = e.emailInput.value;
    successMessageHandler();
  }

  function addClassAttribute(element, classname) {
    element.classList.add(classname);
  }

  function removeClassAttribute(element, classname) {
    element.classList.remove(classname);
  }

  function query(classname) {
    return document.querySelector(classname);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".button").forEach((btn) => {
      btn.addEventListener("click", validateEmail);
    });
  });
})();
