// mobile otp valid
// Initial references
const mobileInput = document.querySelectorAll(".mobile_otp_input");
const mobileInputField = document.querySelector(".mobile_otp_inputfield");
const mobileSubmitButton = document.getElementById("mobile_otp_submit");
let mobileInputCount = 0,
  mobileFinalInput = "";

// Update input
const mobileUpdateInputConfig = (element, disabledStatus) => {
  element.disabled = disabledStatus;
  if (!disabledStatus) {
    element.focus();
    element.style.border = "1px solid #d15e14";
  } else {
    element.blur();
  }
};

mobileInput.forEach((element) => {
  element.addEventListener("keyup", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    let { value } = e.target;

    if (value.length == 1) {
      mobileUpdateInputConfig(e.target, true);
      if (mobileInputCount <= 5 && e.key != "Backspace") {
        mobileFinalInput += value;
        if (mobileInputCount < 5) {
          mobileUpdateInputConfig(e.target.nextElementSibling, false);
        }
        element.style.border = "1px solid #d15e14";
      }
      mobileInputCount += 1;
    } else if (value.length == 0 && e.key == "Backspace") {
      mobileFinalInput = mobileFinalInput.substring(
        0,
        mobileFinalInput.length - 1
      );
      if (mobileInputCount == 0) {
        mobileUpdateInputConfig(e.target, false);
        return false;
      }
      element.style.border = "1px solid #cdcfd3";
      mobileUpdateInputConfig(e.target, true);
      e.target.previousElementSibling.value = "";
      mobileUpdateInputConfig(e.target.previousElementSibling, false);
      mobileInputCount -= 1;
    } else if (value.length > 1) {
      e.target.value = value.split("")[0];
    }
    // mobileSubmitButton.classList.add("show");
    mobileSubmitButton.setAttribute("disabled");
  });
});

window.addEventListener("keyup", (e) => {
  if (mobileInputCount > 5) {
    mobileSubmitButton.classList.add("show");
    mobileSubmitButton.removeAttribute("disabled");
    if (e.key == "Backspace") {
      mobileFinalInput = mobileFinalInput.substring(
        0,
        mobileFinalInput.length - 1
      );
      mobileUpdateInputConfig(mobileInputField.lastElementChild, false);
      mobileInputField.lastElementChild.value = "";
      mobileInputCount -= 1;
      mobileSubmitButton.classList.remove("show");
      mobileSubmitButton.setAttribute("disabled", true);
    }
  }
});


// Start
const mobileStartInput = () => {
  mobileInputCount = 0;
  mobileFinalInput = "";
  mobileInput.forEach((element) => {
    element.value = "";
  });
  mobileUpdateInputConfig(mobileInputField.firstElementChild, false);
};

window.onload = mobileStartInput;
