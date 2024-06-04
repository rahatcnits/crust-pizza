// sign in email
const signInEmailInput = document.querySelector(".signInPhone");
const signInEmailBtn = document.querySelector(".Passcode_btn");

signInEmailInput.addEventListener("keyup", (e) => {
  let { value } = e.target;

  if (value.length > 9) {
    signInEmailBtn.removeAttribute("disabled");
    signInEmailBtn.classList.add("show");
  } else {
    signInEmailBtn.setAttribute("disabled", true);
    signInEmailBtn.classList.remove("show");
  }
});

// format phone number
function formatPhoneNumber(input) {
  // Remove all non-numeric characters
  let value = input.value.replace(/\D/g, "");

  // Limit the input length to 10 digits
  value = value.slice(0, 10);

  // Format the number as 123-123-1234
  let formattedValue = value;

  if (value.length > 3 && value.length <= 6) {
    formattedValue = value.slice(0, 3) + "-" + value.slice(3);
  } else if (value.length > 6) {
    formattedValue =
      value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6);
  }

  input.value = formattedValue;
}
