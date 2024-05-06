// sign in email
const signInEmailInput = document.querySelector(".signInEmail");
const signInEmailBtn = document.querySelector(".Passcode_btn");

signInEmailInput.addEventListener("keyup", (e) => {
  let { value } = e.target;

  if (value.length > 0) {
    signInEmailBtn.removeAttribute("disabled");
    signInEmailBtn.classList.add("show");
  } else {
    signInEmailBtn.setAttribute("disabled", true);
    signInEmailBtn.classList.remove("show");
  }
});
