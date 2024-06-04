//Initial references
const input = document.querySelectorAll(".otp_input");
const inputField = document.querySelector(".otp_inputfield");
const submitButton = document.getElementById("otp_submit");
let inputCount = 0,
  finalInput = "";

//Update input
const updateInputConfig = (element, disabledStatus) => {
  element.disabled = disabledStatus;
  if (!disabledStatus) {
    element.focus();
    element.style.border = "1px solid #d15e14";
  } else {
    element.blur();
  }
};

input.forEach((element) => {
  element.addEventListener("keyup", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    let { value } = e.target;

    if (value.length == 1) {
      updateInputConfig(e.target, true);
      if (inputCount <= 5 && e.key != "Backspace") {
        finalInput += value;
        if (inputCount < 5) {
          updateInputConfig(e.target.nextElementSibling, false);
        }
        element.style.border = "1px solid #d15e14";
      }
      inputCount += 1;
    } else if (value.length == 0 && e.key == "Backspace") {
      finalInput = finalInput.substring(0, finalInput.length - 1);
      if (inputCount == 0) {
        updateInputConfig(e.target, false);
        return false;
      }
      element.style.border = "1px solid #cdcfd3";
      updateInputConfig(e.target, true);
      e.target.previousElementSibling.value = "";
      updateInputConfig(e.target.previousElementSibling, false);
      inputCount -= 1;
    } else if (value.length > 1) {
      e.target.value = value.split("")[0];
    }
    // submitButton.classList.add("show");
    submitButton.setAttribute("disabled");
  });
});

window.addEventListener("keyup", (e) => {
  if (inputCount > 5) {
    submitButton.classList.add("show");
    submitButton.removeAttribute("disabled");
    if (e.key == "Backspace") {
      finalInput = finalInput.substring(0, finalInput.length - 1);
      updateInputConfig(inputField.lastElementChild, false);
      inputField.lastElementChild.value = "";
      inputCount -= 1;
      submitButton.classList.remove("show");
      submitButton.setAttribute("disabled", true);
    }
  }
});


//Start
const startInput = () => {
  inputCount = 0;
  finalInput = "";
  input.forEach((element) => {
    element.value = "";
  });
  updateInputConfig(inputField.firstElementChild, false);
};

window.onload = startInput();
